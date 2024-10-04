<template>
    <div class="col-12">
        <label v-if="label">{{ label }}</label><br>
        <select :id="id" v-model="localItems" :name="name">
            <option hidden="hidden" selected="selected" value="0">{{ firstItem }}</option>
            <option v-for="i,index in items" :key="index" :value="i[valueProperty]">{{i[textProperty]}}</option>
        </select>
    </div>
</template>

<script>
    export default{
        name : "DDLComponent",
        props : {
            items : {
                type : Array,
                required : true
            },
            label : {
                type : String,
                required : false
            },
            name : {
                type : String,
                required : true
            },
            textProperty : {
                type : String,
                required : true
            },
            valueProperty : {
                type : String,
                required : true
            },
            value : {
                type : String
            },
            id : {
                type : String
            },
            firstItem : {
                type : String,
                required : false,
                default : "Select item"
            }
        },
        data(){
            return{
                localItems : []
            }
        },
        mounted(){
            this.localItems = this.value,
            this.localItems = this.value || "0"
        },
        watch : {
            localItems : function(){
                this.$emit("input", this.localItems)
            }
        }
    }
</script>

<style scoped>
    select{
        width: 100% !important;
        height: 35px;
        margin-bottom: 20px;
    }
</style>