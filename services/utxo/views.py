from django.shortcuts import render
from django.http import HttpResponse
from glclient import Scheduler
from glclient import Signer
from glclient import TlsConfig
import os
import json


def utxo_list(request):
    node = get_node()
    outputs = node.list_funds().outputs
    # respJson = json.dumps(outDict)
    # write_file_content(outputs.json, respJson)
    listOut = []

    for o in outputs:
        listOut = listOut + \
            [{"txid": str(o.output.txid.hex), "outnum": o.output.outnum,
                "address": o.address, "amount": str(o.amount)}]

    return HttpResponse(json.dumps(listOut), content_type="application/json")


def get_node():
    network = "testnet"
    seed = get_file_contents('device_seed.bytes', 'rb')
    cert = get_file_contents('device_cert2.crt')
    key = get_file_contents('device_key2.pem')
    tls = TlsConfig().identity(cert, key)
    signer = Signer(seed, network=network, tls=tls)
    signer.run_in_thread()
    scheduler = Scheduler(signer.node_id(), network=network, tls=tls)
    return scheduler.node()


def get_file_contents(filename: str, mode: str = 'r'):
    module_dir = os.path.dirname(__file__)  # get current directory
    file_path = os.path.join(module_dir, filename)
    return open(file_path, mode).read()


def write_file_content(filename: str, content):
    module_dir = os.path.dirname(__file__)  # get current directory
    file_path = os.path.join(module_dir, filename)
    open(file_path, 'w').write(content)
