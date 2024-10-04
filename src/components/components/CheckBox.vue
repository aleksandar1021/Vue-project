<template>
    <div>
        <label v-if="label">{{ label }}</label>
        <div v-for="i,index in items" :key="index" class="form-check">
            <input :id="make_id(r[name], r[valueProperty])" v-model="localItems" class="form-check-input" :name="i[nameProperty]" type="checkbox" :value="i[valueProperty]"/>
            <label class="form-check-label" :for="make_id(i[nameProperty], i[valueProperty])">
                {{ i[textProperty] }}
            </label>
        </div>
    </div>
</template>

<script>
    export default{
        name : "CheckBoxComponent",
        props : {
            items : {
                type : Array,
                required : true
            },
            textProperty : {
                type : String,
                required : true
            },
            valueProperty : {
                type : Number,
                required : true
            },
            label : {
                type : String,
                required : false
            },
            value : {
                type : Array
            },
            nameProperty : {
                type : String,
                required : true
            }
        },
        methods : {
            make_id(name, value){
                return name + "___" + value
            }
        },
        data(){
            return{
                localItems : []
            }
        },
        mounted(){
            this.localItems = this.value
        },
        watch : {
            localItems : function(){
                this.$emit("input", this.localItems)
            }
        }
    }
</script>