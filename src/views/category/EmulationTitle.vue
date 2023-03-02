<template>
  <div class="content">
    <div class="page__name heading">Danh hiệu thi đua</div>
    <div class="page__header">
      <div class="page__header--left">
        <input
          type="text"
          class="input input__icon input__icon--search"
          title="Ấn Enter để tìm kiếm"
          placeholder="Tìm kiếm theo Mã hoặc Tên hoặc SĐT"
          style="width: 265px"
          @keyup.enter="search"
          v-model="inputSearch"
          ref="firstFocus"
        />
        <button
          class="button button--white button--fitter"
          style="font-size: 14px; margin-left: 10px"
        >
          <div class="icon icon-24 icon--fitter"></div>
          Bộ lọc
        </button>
      </div>
      <div>
        <button
          @click="btnAddOnClick"
          id="btnAdd"
          class="button"
          title="Thêm cán bộ, giáo viên"
          style="padding: 0 12px 0 4px"
        >
          <i class="fa-regular fa-plus"></i>
          Thêm danh hiệu
        </button>
      </div>
    </div>
    <div class="page__table">
      <!-- <div class="table__content">
                <table id="tbEmployeeList" class="table" border="0">
                    <thead>
                        <tr>
                            <th class="text-align--center" style="width:54px"><input title="Chọn tất cả cán bộ, giáo viên" ref="checkInputAll" @change="checkboxChoseAllOnClick" :checked="isCheckAll" type="checkbox" class="checkbox-item checkbox-item--all"></th>
                            <th class="text-align--left" style="min-width:309px; padding: 0 16px;" title="Tên danh hiệu thi đua"><b>Tên danh hiệu thi đua</b></th>
                            <th class="text-align--left" style="min-width:159px; padding: 0 16px;" title="Mã danh hiệu"><b>Mã danh hiệu</b> </th>
                            <th class="text-align--left" style="min-width:179px; padding: 0 16px;" title="Đối tượng khen thưởng"><b>Đối tượng khen thưởng</b> </th>
                            <th class="text-align--left" style="min-width:199px; padding: 0 16px;" title="Câp khen thưởng"><b>Cấp khen thưởng</b> </th>
                            <th class="text-align--left" style="min-width:199px; padding: 0 16px;" title="Loại phong trào"><b>Loại phong trào</b> </th>
                            <th class="text-align--left" style="min-width:180px; padding: 0 16px;" title="Trạng thái"><b>Trạng thái</b> </th>
                        </tr>
                    </thead>
                    <tbody v-for="(item) in emulationTitleList" :key="item.EmulationTitleID">
                        <tr style="position: relative; height: 40px;">
                            <td class="text-align--left" style="min-width:54px"><input  type="checkbox" class="checkbox-item" title="Chọn"></td>
                            <td class="text-align--left text-long" style="width:309px; padding: 0 16px;">{{item.EmulationTitleName}}</td>
                            <td class="text-align--left text-long" style="min-width:159px; padding: 0 16px;" title="Click để chỉnh sửa">{{item.EmulationTitleCode}}</td>
                            <td class="text-align--left" style="min-width:179px; padding: 0 16px;">{{item.RewardObject}}</td>
                            <td class="text-align--left text-long" style="min-width:199px; padding: 0 16px;">{{item.RewardLevelName}}</td>
                            <td class="text-align--left text-long" style="min-width:199px; padding: 0 16px;">{{item.MovementType}}</td>
                            <td class="text-align--left text-long status" style="min-width:180px; padding: 0 36px;">
                                <span class="used-status"></span>
                                {{item.Status}}
                            </td>
                            <td class="text-align--center row-actions" >
                                <button class="button-small btn-edit icon icon-24 icon--edit">

                                </button>  
                                <button class="button-small btn-more icon icon-24 icon--more">

                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> -->
      <BaseTable
        ref="emulationTitleGrid"
        :idName="'EmulationTitleID'"
        :columns="columns"
        :data="emulationData"
        :selectedRows="selectedEmulationTitles"
        @selection-change="handleSelectionChange"
        :selection="true"
        :operation="true"
      />

      <div class="table__paging">
        <div class="table__paging--first">
          <span>Tổng số: </span>{{ itemPerPage }} <b>12</b> bản ghi
        </div>
        <div class="table__paging--second">
          <span>Số bản ghi/trang</span>
          <MSingleSelect
            style="align-items: center; margin-right: 16px"
            :width="'85px'"
          />
          <div><b>1</b> - <b>12</b> bản ghi</div>
          <button
            :class="{ 'button--disable': currentPage === 1 }"
            @click="prevPage"
            class="paging__button paging__button--prev"
            title="Về trang trước"
          ></button>
          <button
            :class="{ 'button--disable': currentPage === totalPage }"
            @click="nextPage"
            class="paging__button paging__button--next"
            title="Sang trang tiếp"
          ></button>
        </div>
      </div>
    </div>
  </div>

  <EmulationTitleDetail v-if="isShowDetail" @closeButtonOnClick="showDialog" />

</template>

<script>
import MSingleSelect from "../../components/base/MSingleSelect.vue";
import EmulationTitleDetail from "./EmulationTitleDetail.vue";
import ENUM from "../../script/enum.js";
import BaseList from "../../script/base/BaseList.js";

export default {
  name: "EmulationTitle",
  extends: BaseList,
  components: { MSingleSelect, EmulationTitleDetail },
  data() {
    return {
      isShowDetail: false,
      formMode: ENUM.FORM_MODE.Add,
      emulationTitleList: [],
      totalPage: null,
      currentPage: null,
      itemPerPage: null,
      isCheckAll: null,
      inputSearch: null,
      emulationData: null,
      selectedEmulationTitles: null,
      columns: [
        {
          dataField: "EmulationTitleName",
          title: "Tên danh hiệu thi đua",
          caption: "Tên danh hiệu thi đua",
          width: 310,
        },
        {
          dataField: "EmulationTitleCode",
          title: "Mã danh hiệu",
          caption: "Mã danh hiệu",
          width: 160,
        },
        {
          dataField: "ApplyObject",
          title: "Đối tượng khen thưởng",
          caption: "Đối tượng khen thưởng",
          width: 180,
        },
        {
          dataField: "CommendationLevel",
          title: "Cấp khen thưởng",
          caption: "Cấp khen thưởng",
          width: 200,
        },
        {
          dataField: "MovementType",
          title: "Loại phong trào",
          caption: "Loại phong trào",
          width: 200,
        },
        {
          dataField: "Inactive",
          title: "Trạng thái",
          caption: "Trạng thái",
          width: 180,
        },
      ],
    };
  },

  async created() {
    /**
     * Gọi API để lấy dữ liệu
     * Nguyễn Đăng Quang (12/09/2022)
     */
    try {
      this.emulationTitleList = await this.getData(
        "https://localhost:44300/api/EmulationTitles"
      );
      console.log(this.emulationTitleList);
      this.emulationData = await this.getData(
        "https://localhost:44300/api/EmulationTitles"
      );
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    /**
     * Ẩn hiện form chi tiết
     * Nguyễn Đăng Quang (04/08/2022)
     */
    btnAddOnClick() {
      try {
        this.showDialog(true);
        this.formMode = ENUM.FORM_MODE.Add;
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Xử lý ẩn hiện form chi tiết
     * Nguyễn Đăng Quang (04/08/2022)
     */
    showDialog(isShow) {
      this.isShowDetail = isShow;
    },

    handleSelectionChange() {},
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  padding: 16px;
  min-width: 500px;
  min-height: 500px;
  box-shadow: inset 0 1.5px 2px 0 rgb(0 0 0 / 10%);
}

.page__name {
  margin-bottom: 16px;
}

.page__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 16px;
}

.page__toolbar {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  margin: 4px 0;
}

.page__header--left {
  display: flex;
}

.page__header--right button {
  margin: 0 4px;
}

.page__table {
  display: flex;
  flex-direction: column;
  align-content: stretch;
  flex: 1;
  justify-content: space-between;
}

.button--fitter {
  display: flex;
  align-content: center;
  align-items: center;
  position: relative;
}

.icon.icon-24.icon--fitter {
  margin-right: 6px;
}

#btnAdd {
  display: flex;
  width: 150px;
  height: 37.6px;
  text-align: center;
  line-height: 37.6px;
  align-items: center;
}

#btnAdd i {
  font-size: 20px;
  margin-right: 10px;
  margin-left: 6px;
}

.row-actions {
  position: absolute;
  right: 10px;
  top: 0;
  z-index: 2;
  height: 40px;
  background-color: transparent;
  border: none;
  padding: 0 0px;
  width: 70px;
}

.btn-edit {
  background-color: #fff;
  height: 32px;
  width: 32px;
}

.btn-more {
  background-color: #fff;
  height: 32px;
  width: 32px;
}

.status {
  position: relative;
  padding-left: 50px;
}

.used-status {
  position: absolute;
  border-radius: 50%;
  border: 1px solid #2979ff;
  background-color: #2979ff;
  width: 8px;
  height: 8px;
  top: 50%;
  right: 86%;
  transform: translateY(-50%);
}
</style>
>
