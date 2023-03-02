<template>
  <table class="table">
    <thead>
      <tr>
        <BaseTh
          v-if="selection"
          @selectAll="handleSelectAll"
          :selectedRows="selectedRows"
          :selection="selection"
          :dataLength="data.length"
        ></BaseTh>
        <BaseTh :column="column" v-for="column in columns" :key="column">
        </BaseTh>
      </tr>
    </thead>
    <tbody>
      <tr
        :class="{ 'selected-tr': selectedRows.includes(row) }"
        v-for="row in data"
        :key="row[this.idName]"
      >
        <BaseTd
          @selection-change="handleSelectionChange"
          :row="row"
          :selectedRows="selectedRows"
          v-if="selection"
          :selection="selection"
        />
        <BaseTd
          :column="column"
          :row="row"
          v-for="column in columns"
          :key="column"
        >
        </BaseTd>
        <BaseTd v-if="operation" :operation="operation" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import BaseTh from "./BaseTh.vue";
import BaseTd from "./BaseTd.vue";
export default {
  name: "BaseTable",
  components: { BaseTh, BaseTd },
  props: [
    "data",
    "idName",
    "columns",
    "selectedRows",
    "selection",
    "operation",
  ],
  methods: {
    /**
     * Xử lý khi hàng được chọn
     * @param {*} row hàng trong bảng
     * Created by: NPTINH (29/09/2022)
     */
    handleSelectionChange(rows) {
      this.$emit("selection-change", rows);
    },

    /**
     * Xử lý khi tất cả hàng được chọn
     * Created by: NPTINH (29/09/2022)
     */
    handleSelectAll() {
      // Nếu như số lượng hàng được chọn lớn hơn 0 thì bỏ chọn tất cả hàng được chọn
      if (this.selectedRows.length > 0) {
        this.$emit("selection-change", []);
      } else {
        this.$emit("selection-change", [...this.data]);
      }
    },
  },
};
</script>

<style scoped>
@import url(../../css/base/table.css);
</style>
