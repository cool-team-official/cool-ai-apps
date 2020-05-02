<template>
    <div>
        <div class="list-li">
            <el-row>
                <el-col :span="24">
                    <div class="list-tip">知识</div>
                    <div class="list-title">为什么Http协议要用文本做协议，用二进制不更节约宽带吗?为什么Http协议要用文本做协议，用二进制不更节约宽带吗</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><div class="list-info">比如消息结构体，这样传输数据不是体积更小，更节约宽带吗？为什么用文本做消息更节约宽带吗？为什么用文本做消息</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="24" style="padding-top:10px;">
                    <img class="list-header" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2056493224,2680815097&fm=26&gp=0.jpg" />
                    <div class="list-name">UMU</div>
                    <div class="list-right">
                        <i class="list-zan iconfont icon-zan"></i>
                        <div class="list-num">10</div>
                    </div>
                    <div class="list-right lsit-right-20">
                        <i class="list-zan iconfont icon-pinglun"></i>
                        <div class="list-num">10</div>
                    </div>
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'list'
}
</script>

<style scoped lang="scss">
.list-li{
    margin-bottom: 20px;
    padding:15px 0;
    border-radius:5px;
    &:hover{
        background-color:#f8f8f8;
    }
    .list-tip{
        color:#ffffff;
        background-color:#3D15DD;
        font-size: 12px;
        line-height:22px;
        height:22px;
        border-radius:2px;
        float:left;
        margin-right:5px;
        padding:0 6px;
    }
    .list-title{
        color:#1B1B1B;
        font-size: 14px;
        line-height:22px;
        height:22px;
        float:left;
        font-weight: 600;
        width:80%;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor:pointer;
        &:hover{
            cursor:pointer;
            text-decoration-line: underline;
        }
    }
    .list-info{
        width:100%;
         color:#1B1B1B;
        font-size: 14px;
        line-height:22px;
        height:22px;
        font-weight: 300;
        text-align: left;
        margin-top:16px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .list-header{
        width:26px;
        height:26px;
        border-radius:26px;
        float: left;
        margin-right:10px;
    }
    .list-name{
        font-size: 14px;
        color:#1B1B1B;
        float: left;
        font-weight: 300;
        line-height:26px;
    }
    .list-zan{
        color:#A8AFC1;
        font-size: 24px;
        line-height:26px;
        cursor:pointer;
        float:left;
    }
    .list-num{
        color:#A8AFC1;
        font-size: 14px;
        line-height: 26px;
        margin-left:5px;
        float:left;
    }
    .lsit-right-20{
        margin-right:20px;
    }
    .list-right{
        float:right;
    }
}
    
</style>