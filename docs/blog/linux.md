# Linux开发环境
## 认识Linux
- Linux是什么
Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于POSIX和Unix的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的Unix工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。
- Linux与windows的区别
- 常用的Linux发行版
## 安装Linux环境
### 虚拟机安装
- 下载安装 vmware workstation pro
  - ⽹址:[https://www.vmware.com/cn.html](https://www.vmware.com/cn.html)
  - 首先要 vmware.com 注册⼀一个⽤用户
  - 到下载⻚面下载 VMware
    - windows下载 VMware Workstation Pro 15.0.2 for Windows
    - mac下载VMware fusion
  - 下载完成之后安装
### 安装centos
- 下载稳定版centos7 mini版本 CentOS官网:[https://www.centos.org/](https://www.centos.org/)
## Linux目录
| 目录 | 存放文件 |
|---|---|
| /bin | 系统有很多放置执行档的目录，但/bin比较特殊。因为/bin放置的是在单人维护模式下 还能够被操作的指令。在/bin底下的指令可以被root与一般帐号所使用，主要有: cat,chmod(修改权限), chown, date, mv, mkdir, cp, bash等常用的指令。 |
| /boot | 主要放置开机会使⽤到的档案，包括Linux核心档案以及开机选单与开机所需设定档等。Linux kernel常⽤的档名为:vmlinuz ，如果使⽤的是grub这个开机管理程式，则还会存在/boot/grub/这个目录。此目录文件不可更改。 |
| /dev | ⽤于存放设备⽂件。 |
| /mnt | 系统管理员安装临时文件系统的安装点，系统提供这个目录是让⽤户临时挂载其他的文件系统。 |
| /sbin | 存放二进制可执行文件，只有root才能访问。这里存放的是系统管理员使用的系统级别的管理命令和程序。如ifconfig等。 |
| /etc | 配置文件目录 |
| /home | 新增用户目录 |
| /lib | 核心模块目录 |
| /opt | 额外安装的可选应用程序包所放置的位置。一般情况下，我们可以把tomcat等都安装到这里。 |
| /root | 系统管理员主目录。|
| /usr | 用于存放系统应用程序。|
| /var | ⽤于存放运行时需要改变数据的文件，也是某些大文件的溢出区，⽐方说各种服务的日志文件(系统启动日志等)。 |
| /tmp | 用于存放各种临时文件，是公用的临时文件存储点。 |

## Linux常用命令
- ls 显示当前目录文件
- ls -a 显示当前目录所有文件（包括隐藏文件夹，以.开头的文件夹会隐藏）
- pwd 当前位置路径
- cd / 切换到亘目录
- cd ～ 切换到用户的home目录（root用户为/root，其他用户为/home/用户名）
- netstat 查询端口占用情况
- netstat -an 查询端口占用情况（不解析ip）
- netstat -an | grep 80 筛选占用80端口的进程
- systermctl start 服务名 启动服务
- systermctl stop 服务名 停止服务
- systermctl status 服务名 查看服务运行状态
- kill pid 暴力杀死进程（有风险）

## 端口
- http为80端口
- https为443端口
- mysql为3306端口
- 127.0.0.1只有本机可以访问
- 0.0.0.0 所有机器可访问

