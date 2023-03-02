<template>
    <td v-if="selection" class="table__selection" style="width: 50px">
      <div class="center">
        <BaseCheckbox
          :checkedProp="selectedRows.includes(row)"
          @check="handleRowClick(row)"
          class="table__checkbox"
        >
          <template #checkmark>
            <div class="checkbox__checkmark"></div>
          </template>
        </BaseCheckbox>
      </div>
    </td>
    <td v-else-if="operation" class="operation">
      <div class="operation-icon-wrapper">
        <i class="fa-regular fa-pen operation__icon"></i>
      </div>
      <div class="operation-icon-wrapper">
        <i class="fa-regular fa-ellipsis operation__icon"></i>
      </div>
    </td>
    <td  v-else>
      {{ row[column.dataField] }}
    </td>
  </template>
  
  <script>
  import Resource from "../../js/common/Resource.js";
  
  export default {
    name: "BaseTd",
    props: ["column", "row", "selection", "operation", "selectedRows"],
    data() {
      return {
        algin: "text-left",
        resource: { ...Resource },
      };
    },
    created() {
      switch (this.column?.dataType) {
        case Resource.DataTypeColumn.String:
          this.algin = "text-left";
          break;
        case Resource.DataTypeColumn.Date:
          this.algin = "text-center";
          break;
        case Resource.DataTypeColumn.Number:
          this.algin = "text-right";
          break;
        default:
          break;
      }
    },
    methods: {
      /**
       * Xử lý khi hàng được chọn
       * @param {*} row hàng trong bảng
       * Created by: NPTINH (29/09/2022)
       */
      handleRowClick(row) {
        if (this.selectedRows.includes(row)) {
          this.$emit(
            "selection-change",
            this.selectedRows.filter((item) => item !== row)
          );
        } else {
          this.$emit("selection-change", [...this.selectedRows, row]);
        }
      },
    },
  };
  </script>
  
  <style></style>