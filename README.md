# can-dbc-wasm

wasm port

orignal repo : https://github.com/marcelbuesing/can-dbc

| DBC-Keyword |      Object Type    |    Note    |
| ----------- | ------------------- | ---------- |
| BU_        | Network Node	        | 网络节点   |
| BO_        | Message	            | 帧/消息    |
| SG_        | Signal	            | 信号       |
| EV_        | Environment Variable | 环境变量   |
| SIG_GROUP_ | Signal Group	        | 信号组     |
| VAL_	     | Signal Value Table   | 信号值列表 |

| DBC-Keyword |      Object Type                    |    Note              |
| ----------- | ----------------------------------- | -------------------- |
| VERSION     | VERSION                             | DBC文件版本          |
| NS_         | NS_                                 | 新符号定义段         |
| NS_DESC_    | NS_DESC_                            |     -                |
| CM_         | Node/Frame/Signal Comments          | 节点/帧/信号 注释    |
| BA_DEF_     | Attribute Definitions               | 属性定义             |
| BA_DEF_DEF_ | Attribute Default Value Definitions | 扩展属性缺省值定义   |
| BA_         | Attribute Value Definitions         | 属性值定义           |

|  Expend-Keyword   | 描述            | 备注                |
| ----------------- | ------------------ | ---------------- |
| 网络节点/网段名称 | Network            |  使用数据库名称  |
| 数据库名称	    | DBName             |  BA_扩展属性定义 |
| 帧发送类型	    | GenMsgSendType     |  BA_扩展属性定义 |
| 帧周期	        | GenMsgCycleTime    |  BA_扩展属性定义 |
| 信号发送类型      | GenSigSendType     |  BA_扩展属性定义 |
| 信号初始值        | GenSigStartValue   |  BA_扩展属性定义 |
| CAN FD帧属性      | VFrameFormat       |  BA_扩展属性定义 |

BO_ MessageId MessageName: MessageSize Transmitter
> 1. **BO_**: 关键字， 表示Message
> 2. **MessageId**: 帧的ID(用十进制表示)
> 3. **MessageName**: 帧的名称
> 4. **MessageSize**: 帧的大小(byte)
> 4. **Transmitter**: 发送节点(无为Vector__XXX)

SG_ SignalName : StartBit|SignalSize@ByteOrder ValueType (Factor,Offset) [Min|Max] Unit Receiver

>  1. **SG_: ** 是关键字，表示信号
>  2. **SignalName: ** 信号的名字
>  3. **StartBit: ** 信号起始位
>  4. **SignalSize: ** 是信号长度
>  5. ByteOrder: ** 1表示是Inter格式; 如果是 0， 表示是Motorrola格式
>  6. ValueType: ** + 表示无符号数; 如果是-，表示有符号数
>  7. **（Factor, Offset）: **原始值与物理值之间的转换， 物理值 = 原始值*因子Factor + 偏移量Offset
>  8. **[Min,Max]: ** 表示【最小值，最大值】, double类型
>  9. **unit/引号: **之间的是单位，为字符串类型
>  10. **Receiver: ** 表示该信号的接收节点，如果没有接受节点，必须设置为Vector_xxx

[更多格式定义](https://blog.csdn.net/weixin_39913518/article/details/126663754)
