# 怎样使用YNU的Docker镜像镜像服务

### 安装或升级Docker（可选）

为了使用稳定的Docker体验，定期升级你的docker吧

### 配置Docker启动参数

**核心就一条，在你的docker启动参数中添加`--registry-mirror=http://mirror.docker.ynu.edu.cn`，然后重启docker服务**

1. Ubuntu
	```
echo "DOCKER_OPTS=\"\$DOCKER_OPTS --registry-mirror=http://mirror.docker.ynu.edu.cn\"" | sudo tee -a /etc/default/docker
sudo service docker restart
    ```
2. Centos
	```
sudo sed -i 's|other_args=|other_args=--registry-mirror=http://mirror.docker.ynu.edu.cn |g' /etc/sysconfig/docker
sudo sed -i "s|OPTIONS='|OPTIONS='--registry-mirror=http://mirror.docker.ynu.edu.cn |g" /etc/sysconfig/docker
sudo service docker restart
    ```
3. Mac OS (使用boot2docker)
	```
boot2docker ssh
sudo su
echo "EXTRA_ARGS=\"--registry-mirror=http://mirror.docker.ynu.edu.cn\"" >> /var/lib/boot2docker/profile && exit
exit
boot2docker restart
    ```
4. Windows (使用boot2docker)
	```
sudo su
echo "EXTRA_ARGS=\"--registry-mirror=http://mirror.docker.ynu.edu.cn\"" >> /var/lib/boot2docker/profile
exit
boot2docker restart
    ```


### 尽情享受快速的Docker镜像服务

不需要的配置或操作，就像从官方Hub Resigtry上下载镜像一样
```
docker pull ubuntu
```

### 其他

此文档参考[Docker加速器](https://dashboard.daocloud.io/mirror)

如需了解跟多Docker镜像服务，请参考[Registry](Registry.md)