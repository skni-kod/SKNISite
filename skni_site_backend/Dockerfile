FROM python:3.12 AS base

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    gnupg \
    wget \
    ca-certificates \
    lsb-release \
    libffi-dev \
    libheif-dev \
    libde265-dev \
    dos2unix \
    && rm -rf /var/lib/apt/lists/*


RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN pip install "poetry==2.0.1"
ENV POETRY_VIRTUALENVS_CREATE=false
COPY ./pyproject.toml /app/
COPY ./poetry.lock /app/
RUN poetry install --no-root

COPY . /app/

FROM base
CMD ["dos2unix", "scripts/run"]
CMD ["/bin/bash", "scripts/run"]
