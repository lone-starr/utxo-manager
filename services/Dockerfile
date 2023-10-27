# Python on Debian Linux
FROM python:3.10-bullseye

# Update default packages
RUN apt-get update

# Get packages
RUN apt-get install -y \
    build-essential \
    curl

# Update new packages
RUN apt-get update

RUN apt-get install -y \
    autoconf \
    clang \
    curl \
    git \
    libgmp-dev \
    libsqlite3-dev \
    libtool \
    pkg-config \
    python3-pip \
    valgrind

# Get Rust
RUN curl https://sh.rustup.rs -sSf | bash -s -- -y

# Put Cargo in the PATH
ENV PATH="/root/.cargo/bin:${PATH}"

# Create app environment
WORKDIR /app
COPY requirements.txt .

# Install Python packages, upgrade just in case apt not latest
RUN pip install --upgrade pip
# Django requirements
RUN pip install -r requirements.txt
# Greenlight
RUN pip install -U gl-client
RUN pip install --extra-index-url=https://us-west2-python.pkg.dev/c-lightning/greenlight-pypi/simple/ -U gl-client-py

# Copy Django code, expose port, launch app
COPY . .
EXPOSE 8000
CMD . start.sh