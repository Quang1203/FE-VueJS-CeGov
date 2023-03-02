<template>
    <div class="dropdown" style="flex:1; display: flex;" 
    :style="{ width: width || '200px' }"
    @keyup.tab="handleFocusOut"
    @keyup.down="focusOptionNext"
    >
        <div @click="toggleOptions"  class="dropdown-select" >
            <input ref="input" tabindex="5" class="select" v-model="optionSelected[valueName]"
            @keypress.enter="toggleOptions"
            @keyup.tab="handleFocusOut"
            @keyup.down="handleOptionClicked(items[i++])"
            >
            <i class="fa-solid fa-angle-down" style="color: #999999; font-size: 15px"></i>
            <div ref="dropdown" @click="toggleOptions" v-show="isShowOptions" class="dropdown-list" id="drop-room__list" style="z-index: 2 ;"
            >
                <div v-for="(item, index) in items" :key="item[idName]"
                    class="row dropdown-list_item"
                    ref="item" 
                    @click="handleOptionClicked(item)"
                    @keyup.enter="handleOptionClicked(item)"
                    @keyup.esc="focusOptionNext(index)"
                    :id="item[idName]"
                    :class="{'dropdown-list_item--selected': selectedItemID.includes(item[idName]) }">
                    {{ item[valueName] }}
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import RESOURCE from "../../script/resource.js"

export default {
    name: "MCombobox",
    props: ["idName", "valueName", "url", "width", "initialValue"],
    data() {
        return {
            isShowOptions: false,
            items: [],
            optionSelected:{},
            selectedItemID:[],
            hideListSelect : true,
            hoveredOptionIndex: 0,
            i:0,
        }
    },

    created() {
        /**
        * Gọi API để lấy dữ liệu cho combobox
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        if (this.url) {
            this.getData();
            this.selectedItemID = [];
            this.optionSelected = this.initialValue ;
            this.selectedItemID.push(this.optionSelected[this.idName]);
            // console.log(this.initialValue);
        }
    },

    watch: {
        initialValue() {
            this.optionSelected = this.initialValue ;
            this.selectedItemID.push(this.optionSelected[this.idName]);
            
        },
        i(val) {
            if(val == 5 ) {
                this.i = 0;
            }
        }
    },

    methods: {
        /**
        * Gọi API để lấy dữ liệu
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        getData() {
            try {
                fetch(this.url,{method:RESOURCE.METHOD.Get})
                .then(res=>res.json())
                .then(res=>{
                    this.items = res;
                })
                .catch(res=>{
                    console.log(res);
                })
            } catch (error) {
                console.log(error);
            }
        },

        /**
        * Hàm bỏ Focus
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        handleFocusOut() {
            try {
                this.isShowOptions = false;
            } catch (error) {
                console.log(error);
            }
        },

        /**
        * Hàm ẩn hiện dropdown
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        toggleOptions() {
            try {
                this.isShowOptions = !this.isShowOptions;
                console.log(this.$refs.item[0]);
                this.$refs.item[0].focus();
            } catch (error) {
                console.log(error);
            }
        },

        /**
        * Hàm chọn 1 lựa chọn
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        handleOptionClicked(item) {
            try {
                this.selectedItemID = [];
                this.$emit("getValue", item[this.idName], item[this.valueName], item);  
                this.optionSelected = item;
                this.selectedItemID.push(this.optionSelected[this.idName]);
                this.isShowOptions = false;
                console.log(this.isShowOptions);
                console.dir(this.$refs.item[0]);
            } catch (error) {
                console.log(error);
            }
        },


        /**
        * Hàm focus vào lựa chọn tiếp theo
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        focusOptionNext() {
            try {
                this.isShowOptions = true;
                this.$refs.dropdown.focus();
                console.log(this.$refs.dropdown);
                const opres = this.$refs.item[0] ;
                opres.focus();
                console.log(this.$refs.item[0]);
            } catch (error) {
                console.log(error);
            }
        },

    },

    
}
</script>

<style>
    @import url("../../styles/main.css");
    .combobox {
        position: relative;
        border-radius: 4px;
        box-sizing: border-box;
        height: 32px;
        min-width: 128px;
        
        
    }
    
    .combobox__button,
    select {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 13px;
        background-color: var(--main-color);
        border-radius: 4px;
        height: 32px;
        color: #fff;
        padding: 0 12px 0 12px;
        text-align: center;
        border: none;
        min-width: 96px;
        cursor: pointer;
        outline: none;
        outline: none;
        border-radius: 4px 0px 0px 4px;
    
        
    }
    
    
    
    .combobox__button-arrow {
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 0;
        height: 32px;
        border-radius: 0 4px 4px 0px;
        width: 32px;
        cursor: pointer;
        border: none;
        background-color: #009253;
        font-size: 11px;
        color:  #fff;
    }
    
    .combobox__button-arrow:hover {
        background-color: #05A25E;
    }
    
    .combobox__button-arrow--disable{
        background-color: #D6D3D3;
        color: #A6A6A6;
        cursor: none;
        pointer-events: none;
    }
    
    .combobox__data {
        position: absolute;
        width: 100%;
        top: 100%;
        left: 0;
        border-radius: 4px;
    }
    
    .combobox__item {
        line-height: 32px;
        padding-left: 36px;
        height: 32px;
    }
    
    .combobox__item:first-child {
        border-radius: 4px 4px 0px 0px;
        
    }
    
    .combobox__item:hover {
        background-color: #e9ebee;
    }
    
    .combobox__item--selected {
        pointer-events: none;
        background-color: var(--active-side-color);
        color: #fff;
    }
    
    
    .dropdown {
        /* width: 100%; */
        position: relative;
    }
    
    .dropdown-select input {
        width: 100%;
        height: 100%;
        border: none;
    }
    
    .dropdown-select textarea {
        width: 100%;
        /* height: 100%; */
        border: none;
    }
    
    .dropdown-select input:focus-visible {
        outline: none
    
    }
    
    /* .dropdown:hover .dropdown-list {
        opacity: 1;
        visibility: visible;
    } */
    
    .dropdown-select {
        padding: 10px;
        border-radius : 4px;
        background-color : white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content : space-between;
        font-size: 13px;
        cursor: pointer;
        height: 35px;
        padding: 4px 16px;
        border: 1px solid #e0e0e0;
        border-radius: 3.5px;
    
    }
    
    
    .dropdown-list {
        padding-top: 6px;
        border-radius : 4px;
        background-color : white;
        position: absolute;
        top: 110%;
        left: 0;
        right: 0;
        border: 1px solid #ccc;
        max-height: 160px;
        overflow-y: auto;
        z-index: 100;
    }
    
    .dropdown-select::after{
        content: "";
        display: block;
        position: absolute;
        top: 82%;
        right: 0;
        width: 100%; 
        height: 10px;
        background-color: 0;
        
    }
    
    .dropdown-list_item {
        padding: 4px 16px;
        font-size: 13px;
        height: 28px;
        cursor: pointer;
    
    }
    
    .dropdown-list_item--selected {
        background-repeat: no-repeat;
        background-size: contain;
        background-color: #e8f5f7;
        /* pointer-events: none; */
        background: url(../../assets/icon/TongHop.svg) -196px -30px;
        width: 32px;
        height: 32px;
        
    
    }
    
    .dropdown-list_item:hover{
        background-color: #bfd1fe;
    }
    
    
    .dropdown-list::-webkit-scrollbar{
        width: 6px;
        height: 8px;
        
    }
    .dropdown-list::-webkit-scrollbar-thumb{
        background-color: #8f8f8f;
        border-radius: 4px;
    }
    .dropdown-list::-webkit-scrollbar-track{
        background-color: none;
    }
        .row.dropdown-list_item {
            height: 32px;
            margin: 0px;
            padding-top: 2px;
            padding-bottom: 0px;
            line-height: 32px;
        }
        .dropdown-select {
            position: relative;
        }
</style>