<template>
<div class="all">
<el-row type="flex" class="row-bg" justify="center" vertical-align="middle" >
    <el-col :span="10"> 
     <el-form ref="form" :model="form" label-width="80px">
        <el-form-item prop="file" label="">
                <el-upload
                    :auto-upload="false" 
                    :limit='1'
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    accept="image/jpg,image/jpeg,image/png"
                    :on-success="handleAvatarSuccess"
                    >
                    <i class="el-icon-upload"></i>
                    <img v-if="imgpath" :src=imgpath class="avatar" />
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过5M</div>
                 </el-upload>
        </el-form-item>
         <el-form-item style="margin-left:50px;">
                <!-- <el-form-item label="诊断结果">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item> -->
                <el-button type="primary" @click="onSubmit()">立即诊断</el-button>
                <el-button style="margin-left: 85px;width: 100px;" @click.stop="handleRemove">取消</el-button>
        </el-form-item>   
     </el-form>
     <el-form label-position="top" label-width="80px" :model="tiaoli">
        <el-form-item label="体质类型" class="item" >
            <el-input v-model="tiaoli.tizhi_name" class="shorttext"></el-input>
        </el-form-item>
        <el-form-item label="常见表现" class="item">
            <el-input v-model="tiaoli.changjianbiaoxian" class="shorttext"></el-input>
        </el-form-item>
        <el-form-item label="精神调养" class="item">
            <el-input v-model="tiaoli.jingshentiaoyang" class="shorttext"></el-input>
        </el-form-item>
        <el-form-item label="发病倾向" class="item">
            <el-input v-model="tiaoli.fabingqingxiang" class="shorttext"></el-input>
        </el-form-item>
     </el-form>
    </el-col>
    <el-col :span="9"> 
     <el-form label-position="top" label-width="80px" :model="tiaoli">
        <el-form-item label="娱乐调摄" class="item">
            <el-input v-model="tiaoli.yuletiaoshe" class="shorttext"></el-input>
        </el-form-item>
        <el-form-item label="四季养生" class="item">
            <el-input v-model="tiaoli.sijiyangsheng" class="shorttext"></el-input>
        </el-form-item>
        <el-form-item label="体育锻炼" class="item">
            <el-input v-model="tiaoli.tiyuduanlian" class="shorttext"></el-input>
        </el-form-item>
        <el-form-item label="起居调摄" class="item">
            <el-input v-model="tiaoli.qijutiaoshe" class="shorttext"></el-input>
        </el-form-item>
        <el-form-item label="音乐调理" class="item">
            <el-input v-model="tiaoli.yinyuetiaoli" class="shorttext"></el-input>
        </el-form-item>
        <el-form-item label="经络保健" class="item">
            <el-input v-model="tiaoli.jingluobaojian" class="shorttext"></el-input>
        </el-form-item>

     </el-form>
    </el-col>
</el-row>
</div>
</template>
<script>
export default {
    data(){
        return{
            form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        },
        tiaoli: {
          name: '',
          region: '',
          type: ''
        }
        };
    },
    methods:{
         // 上传成功后的回显
        handleAvatarSuccess(res, file) {
            this.imgpath = URL.createObjectURL(file.raw);
        },
        onSubmit(){
         this.request.post("http://www.aibayes.cn/api/analysis",
          {
            params:{
                method:"9tiAnalysis",
                imgpath:this.imgpath
            }
          }).then(res =>{
                console.log(res)
                this.tiaoli = res
            })
            
        },
        handleRemove(file) {
         // console.log(file, fileList);
        this.imgpath = "";
         },
          // 上传成功后的回显
     
       
    }
 }

</script>
<style lang="less">
    .shorttext{
        width:500px;
    }
    .all{
        background:url("") no-repeat;
        background-size: 100%;
    }
    .item .el-form-item__label{
        font-size: 16px;
    }
</style>
