<template>
    <div class="col-12">
        <label v-if="label">{{ label }}</label>
        <div v-for="r,index in radios" :key="index" class="form-check">
            <input v-model="selected" class="form-check-input" type="radio" :name="name" :value="r[valueProperty]" :id="make_id(r[name], r[valueProperty])">
            <label class="form-check-label" :for="make_id(r[name], r[valueProperty])">
                &nbsp;&nbsp;{{ r[textProperty] }}
            </label>
        </div>
    </div>
</template>

<script>
    export default{
        name : "RadioButtonComponent",
        props : {
            radios : {
                type : Array,
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
            name : {
                type : String,
                required : true
            },
            label : {
                type : String,
                required : false
            },
            value : {
                type : String,
            }

        },
        methods : {
            make_id(name, value){
                return name + "__" + value
            }
        },
        data(){
            return{
                selected : undefined
            }
        },
        mounted(){
            this.selected = this.value
        },
        watch : {
            selected : function(){
                this.$emit("input", this.selected)
            }
        }

    }
</script>

<style scoped>
    label{
        cursor: pointer;
    }
    input{
        cursor: pointer;
    }
</style>