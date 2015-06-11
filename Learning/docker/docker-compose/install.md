# 安装 Compose


使用以下的命令即可安装Comopse:

```

curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

```

注意: 如果运行以上两条命令出现错误：“Permission denied” ，请在运行命令之前先运行 `sudo -i`。

