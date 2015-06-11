# Docker Compose

##　概述

`docker-compose` 是一个用来定义和运行复杂docker命令的工具。使用它可以在单个文件中定义多个容器，然后仅通过一条命令就可以将这些容器全部运行起来。

使用Compose一般需要三个步骤。

首先，定义你的 `Dockerfile` 文件

```
FROM python:2.7
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code
CMD python app.py

```

然后定义 `docker-compose.yml` 文件，将启动容器需要配置的参数写到此文件中：

```

web:
  build: .
  links:
   - db
  ports:
   - "8000:8000"
db:
  image: postgres

```

最后，运行 `docker-compose up` 命令启动容器。


## 开始使用

- [安装 Compose]()
- 