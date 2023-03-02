<template>
    <!-- Dialog chi tiết nhân viên -->
    <div id="dlgEmployeeDetail" class="dialog"> 
        <div class="dialog__content">
            <div class="dialog__header">
                <div class="dialog__header-title" style="color: var(--text-color) ;" >Thêm danh hiệu thi đua</div>
                <div @click="btnCloseOnClick" class="dialog__button--close" title="Đóng"></div>
                <div @click="btnHelpOnClick" class="dialog__button--help icon icon-24 icon--help" title="Help"></div>
            </div>
            <div class="dialog__body" >
                <div class="row" style="margin-bottom: 8px;">
                    <label>Tên danh hiệu thi đua <span class="input--required">*</span></label>
                </div>
                <div class="row">
                    <input type="text" class="input" style="flex:1; padding-left: 12px;" id="txtEmulationTitleName" required
                                name-property="Tên danh hiệu thi đua" title="Thông tin này không được phép để trống">
                </div>
                <div class="row" style="color: #e61d1d; margin-top: 6px; margin-bottom: 16px;">
                    <span v-show="true" class="error-text">Tên danh hiệu thi đua không được để trống</span>
                </div>
                <div class="row" style="margin-bottom: 8px;">
                    <div class="col-50">
                        <label>Mã danh hiệu <span class="input--required">*</span></label>
                    </div>
                    <div class="col-50">
                        <label>Đối tượng khen thưởng <span class="input--required">*</span></label>
                    </div>
                </div>
                <div class="row" style="margin-bottom: 16px;">
                    <div class="col-50">
                        <input type="text" class="input" style="flex:1;">
                    </div>
                    <div class="col-50">
                        <div class="row">
                            <div class="col-50">
                                <input class="checkbox-item" type="checkbox" title="Cá nhân" >
                                <label style="font-size: 13px;">Cá nhân</label>
                            </div>
                            <div class="col-50">
                                <input class="checkbox-item" type="checkbox" title="Tập thể" >
                                <label style="font-size: 13px;">Tập thể</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-bottom: 8px;">
                    <div class="col-50">
                        <label>Cấp khen thưởng <span class="input--required">*</span></label>
                    </div>
                    <div class="col-50">
                        <label>Loại phong trào áp dụng <span class="input--required">*</span></label>
                    </div>
                </div>
                <div class="row" style="margin-bottom: 16px;">
                    <div class="col-50">
                        <MSingleSelect style="align-items: center;" title="Chọn tổ chuyên môn"
                            :width="'200px'"
                        />
                    </div>
                    <div class="col-50">
                        <div class="row">
                            <div class="col-50">
                                <input class="checkbox-item" type="checkbox" title="Thường xuyên" >
                                <label style="font-size: 13px;">Thường xuyên</label>
                            </div>
                            <div class="col-50">
                                <input class="checkbox-item" type="checkbox" title="Theo đợt" >
                                <label style="font-size: 13px;">Theo đợt</label>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                    
                <div class="row" style="margin-bottom: 8px;">
                    <label>Ghi chú </label>
                </div>
                <div class="row" style="margin-bottom: 16px;">
                    <textarea id="txtNote" ></textarea>
                </div>

                <div class="dialog__footer">
                    <button tabindex="14" @click="btnSaveOnclick" id="btnSave" class="button" style="order:1" title="Lưu thông tin">Lưu</button>
                    <button tabindex="15" @click="btnCloseOnClick" class="button button-basic--white" style="order:2; border: 1px solid var(--active-side-color);" title="Đóng form">Lưu & thêm mới</button>
                    <button tabindex="16" @click="btnCloseOnClick" class="button button-basic--white" style="order:3" title="Đóng form">Đóng</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import ENUM from "../../script/enum.js"
import RESOURCE from "../../script/resource.js"
import MSingleSelect from  "../../components/base/MSingleSelect.vue";



export default {
    name: "EmulationTitleDetail",
    components: {MSingleSelect},
    props: ["showDialogFunction"],
    data() {
        return {
            employeeSelected: {},
            isError: false,
            showErrorValidate: false,
            EMT: false,
            WorkStatus: false,
            QuitDate : null,
            isEmptyEmpNameBlur: false,
            isEmptyEmpCodeBlur: false,
            isEmptyEmpName: false,
            isEmptyEmpCode: false,
            empName:"",
            empCode:"",
            empTelNumber:"",
            empEmail:"",
            validateString:[],
            birthday: '',
            CheckDuplicateEmployeeCode: "",
            
        };
    },
    created() {
        
    },

    /**
    * Sự kiện Focus vào ô nhập liệu đầu tiên
    * Author: Nguyễn Đăng Quang (09/09/2022)
    */
    mounted(){
            
    },

    

    methods: {
        /**
        * Sự kiện lấy giá trị của combobox chọn tổ bộ môn
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        getValueGroup(idGroup, nameGroup) {
            try {
                this.employeeSelected.employee.GroupID = idGroup;
                this.employeeSelected.employee.GroupName = nameGroup;
                console.log(idGroup,nameGroup);
            } catch (error) {
                console.log(error);
            }
        },

        /**
        * Sự kiện lấy giá trị của combobox chọn môn
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        getValueSubjects(listSubject) {
            try {
                this.employeeSelected.ListSubject = listSubject;
            } catch (error) {
                console.log(error);
            }
        },

        /**
        * Sự kiện lấy giá trị của combobox chọn kho phòng
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        getValueStorageRooms(listStorageRoom) {
            try {
                this.employeeSelected.ListStorageRoom = listStorageRoom;
            } catch (error) {
                console.log(error);
            }
        },
        
        /**
        * Sự kiện đóng form 
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        btnCloseOnClick() {
            try {
                this.$emit("closeButtonOnClick", false);
            } catch (error) {
                console.log(error);
            }
        },

        /**
        * Format ngày về type date
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        formatDateInput(date){
            if (date) {
                let dateIn = new Date(date),
                    year = dateIn.getFullYear().toString(),
                    month = (dateIn.getMonth() + 1).toString().padStart(2, '0'),
                    day = dateIn.getDate().toString().padStart(2, '0');
            
                return `${year}-${month}-${day}`;
            }
        },

        /**
        * Format ngày về type datetime
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        formatDate(dateSrc ){
            if (dateSrc) {
                let date = new Date(dateSrc),
                    year = date.getFullYear().toString(),
                    month = (date.getMonth() + 1).toString().padStart(2, '0'),
                    day = date.getDate().toString().padStart(2, '0');
            
                return `${year}-${month}-${day}T00:00:00`;
            }
        },

        /**
        * Validate form 
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        validate() {
            try {
                var me = this;
                // validate dữ liệu:
                // validate sô hiệu cán bộ
                if(me.employeeSelected.employee.EmployeeCode == "" || me.employeeSelected.employee.EmployeeCode == undefined) {
                    me.validateString.push(RESOURCE.VALIDATE_STRING.EmployeeCodeRequired);
                } else {
                    me.validateString= me.validateString.filter(item => item !== RESOURCE.VALIDATE_STRING.EmployeeCodeRequired);
                }
                // validate tên nhân viên
                if(me.employeeSelected.employee.EmployeeName == "" || me.employeeSelected.employee.EmployeeName == undefined) {
                    me.validateString.push(RESOURCE.VALIDATE_STRING.EmployeeNameRequired);
                } else {
                    me.validateString= me.validateString.filter(item => item !== RESOURCE.VALIDATE_STRING.EmployeeNameRequired);
                }
                // validate sô điện thoại nhân viên
                if(me.employeeSelected.employee.TelNumber != undefined && me.employeeSelected.employee.TelNumber != "") {
                    if(me.employeeSelected.employee.TelNumber.length < 10 ) {
                        me.validateString.push(RESOURCE.VALIDATE_STRING.TelNumberValidate);
                    } else {
                        me.validateString= me.validateString.filter(item => item !== RESOURCE.VALIDATE_STRING.TelNumberValidate);
                    }
                }else {
                    me.validateString= me.validateString.filter(item => item !== RESOURCE.VALIDATE_STRING.TelNumberValidate);
                }
                // validate email nhân viên
                if(me.employeeSelected.employee.Email != undefined && me.employeeSelected.employee.Email != "") {
                    /* eslint-disable no-useless-escape */
                    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(me.employeeSelected.employee.Email))) {
                        me.validateString.push(RESOURCE.VALIDATE_STRING.EmailValidate);
                    } else {
                        me.validateString= me.validateString.filter(item => item !== RESOURCE.VALIDATE_STRING.EmailValidate);
                    }
                }
                // validate ngày nghỉ việc nhân viên
                var today = new Date();
                if(me.QuitDate > this.formatDateInput(today)) {
                    me.validateString.push(RESOURCE.VALIDATE_STRING.QuitDateValidate);
                } else {
                    me.validateString= me.validateString.filter(item => item !== RESOURCE.VALIDATE_STRING.QuitDateValidate);
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
        * Sự kiện ấn nút save
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        btnSaveOnclick() {
            try {
                var me = this;
                // validate dữ liệu:
                me.validateString = [];
                // validate trùng mã nhân viên  
                if(me.formMode === ENUM.FORM_MODE.Add) {
                    fetch(RESOURCE.API.Employees +"/duplicateEmployeeCode/" + me.employeeSelected.employee.EmployeeCode ,{method:RESOURCE.METHOD.Get})
                    .then(res=>res.text())
                    .then(res=>{
                        if(res != "OK") {
                            me.validateString.push(RESOURCE.VALIDATE_STRING.EmployeeCodeDuplicate);    
                        }else {
                            me.validateString= me.validateString.filter(item => item !== RESOURCE.VALIDATE_STRING.EmployeeCodeDuplicate);
                        }
                    })
                    .then(function() {
                        me.validate();

                        if(me.validateString.length == 0 ) {
                            me.$emit("saveButtonOnClick", me.employeeSelected);
                            me.showErrorValidate = false;

                        } else {
                            // hiện popup validate
                            me.showErrorValidate = true;
                        }
                    })
                    .catch(res=>{
                        console.log(res);
                    })
                } else {
                    me.validate();
                    if(me.validateString.length == 0 ) {
                        me.$emit("saveButtonOnClick", me.employeeSelected);
                        me.showErrorValidate = false;
                    } else {
                        // hiện popup validate
                        me.showErrorValidate = true;
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        },

        /**
        * Sự kiện ẩn thông báo validate
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        hideNotice() {
            try {
                this.showErrorValidate = false;
            } catch (error) {
                console.log(error);
            }
        },
        
        /**
        * Sự kiện khi blur input Họ và tên
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        blurEmpName(e) {
            try {
                var name =e.target.value;
                this.empName = name;
                
                if(name == "") {
                    this.isEmptyEmpNameBlur = true;
                    this.isEmptyEmpName = true;
                    setTimeout(() => {
                        this.isEmptyEmpName = false;
                    },2000);

                }else {
                    this.isEmptyEmpNameBlur = false;
                    this.isEmptyEmpName = false;
                }
            } catch (error) {
                console.log(error);
            }
        },

        /**
        * Sự kiện khi blur input SHCB
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        blurEmpCode(e) {
            try {
                var code =e.target.value;
                this.empCode = code;
                if(code == "") {
                    this.isEmptyEmpCodeBlur = true;
                    this.isEmptyEmpCode = true;
                    setTimeout(() => {
                        this.isEmptyEmpCode = false;
                    },2000);


                }else {
                    this.isEmptyEmpCodeBlur = false;
                    this.isEmptyEmpCode = false;

                }
            } catch (error) {
                console.log(error);
            }
            
        },

        /**
        * Sự kiện khi blur input SĐT
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        blurEmpTelNumber(e) {
            try {
                var telNum =e.target.value;
                this.empTelNumber = telNum;
            } catch (error) {
                console.log(error);
            }
            

        },

        /**
        * Sự kiện khi blur input email
        * Author: Nguyễn Đăng Quang (09/09/2022)
        */
        blurEmpEmail(e) {
            try {
                var email =e.target.value;
                this.empEmail = email;
            } catch (error) {
                console.log(error);
            }
        },

        validateEmail(email) {
            /* eslint-disable no-useless-escape */
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                this.validateString.push(RESOURCE.VALIDATE_STRING.EmailValidate);
            } else {
                this.validateString= this.validateString.filter(item => item !== RESOURCE.VALIDATE_STRING.EmailValidate);
            }
        },
    },
}
</script>