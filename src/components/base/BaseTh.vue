<template>
    <th v-if="selection" class="table__selection" style="width: 50px">
      <div class="center">
        <BaseCheckbox
          :checkedProp="selectedRows.length > 0"
          @check="handleAllSelected"
          class="table__checkbox"
        >
          <template #checkmark>
            <div
              class="checkbox__checkmark"
              :class="{
                'checkbox-not-all':
                  selectedRows.length !== dataLength && selectedRows.length !== 0,
              }"
            ></div>
          </template>
        </BaseCheckbox>
      </div>
    </th>
    <th v-else-if="operation"></th>
    <th
      :style="{ width: column.width }"
      :title="column.title"
      v-else
    >
      {{ column.caption }}
    </th>
  </template>
  
  <script>
  import Resource from "../../js/common/Resource.js";
  export default {
    name: "BaseTh",
    props: ["selection", "column", "operation", "selectedRows", "dataLength"],
    data() {
      return {
        algin: "text-left",
        resource: { ...Resource },
      };
    },
    created() {
      switch (this.column?.dataType) {
        case this.resource.DataTypeColumn.String:
          this.algin = "text-left";
          break;
        case this.resource.DataTypeColumn.Date:
          this.algin = "text-center";
          break;
        case this.resource.DataTypeColumn.Number:
          this.algin = "text-right";
          break;
        default:
          break;
      }
    },
    methods: {
      handleAllSelected() {
        this.$emit("selectAll");
      },
    },
  };
  </script>
  
  <style>
    @import url(../../css/base/table-th.css);
  </style>