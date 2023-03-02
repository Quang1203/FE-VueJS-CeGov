import ENUM from "../enum.js"
export default {
  name: "BaseForm",
  methods: {
    /**
     * Mở form
     */
    open(param) {
      if (param.formMode === ENUM.FORM_MODE.Edit) {
        this.bindingData(param.data);
      }
    },
    /**
     * Binding dữ liệu vào form
     */
    bindingData(data) {
      console.log(data);
    },
    /**
     * Lưu dữ liệu form
     */
    save() {
      console.log("save");
    },
  },
};