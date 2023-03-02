import BaseForm from "./BaseForm.js";
import ENUM from "../enum.js";
import RESOURCE from "../resource.js";

export default {
	name: "BaseList",
	data() {
		return {
			// Trạng thái hiển thị của form detail của grid
			isFormDetailShowed: false,
			grid: null,
			// Lưu lại dữ liệu
			cacheData: [],
			// Form detail
			formDetail: { ...BaseForm },
			listData: [],
			// url : "",
		};
	},
	// created() {
	//   this.getData(this.url);
	// },
	methods: {
		/**
		 * Lấy dữ liệu từ server
		 */
		getData(url) {
			return new Promise((resolve, reject) => {
				fetch(url, { method: RESOURCE.METHOD.Get })
					.then((res) => res.json())
					.then((res) => {
						resolve(res);
						console.log(res);
						this.listData = res;
						console.log(this.listData);
					})
					.catch((res) => {
						reject(res);
						console.log(res);
						this.listData = res;
					});
			});
		},
		/**
		 * Thêm mới
		 */
		add() {
			let param = {
				FormMode: ENUM.FORM_MODE.Add,
			};
			if (this.formDetail) {
				this.formDetail.methods.open(param);
				this.isFormDetailShowed = true;
			}
		},
		/**
		 * Chỉnh sửa
		 */
		edit() {
			let param = {
				FormMode: ENUM.FORM_MODE.Edit,
			};
			if (this.formDetail) {
				this.formDetail.methods.open(param);
				this.isFormDetailShowed = true;
			}
		},
		/**
		 * Thực hiện đóng form detal
		 */
		closeFormDetail() {
			this.isFormDetailShowed = false;
		},
		/**
		 * render table
		 */
		async renderTable() {
			//     <BaseTable
			//     :idName="'EmulationTitleID'"
			//     :columns="columns"
			//     :data="emulationTitleList"
			//     @selection-change="handleSelectionChange"
			//   >
			//     <BaseTableColumn
			//       :dataType="resource.DataTypeColumn.String"
			//       :prop="'EmulationTitleName'"
			//       :label="'Tên danh hiệu thi đua'"
			//     />
			//     <BaseTableColumn
			//       :dataType="resource.DataTypeColumn.String"
			//       :prop="'EmulationTitleCode'"
			//       :label="'Mã danh hiệu'"
			//       :width="'160px'"
			//     />
			//     <BaseTableColumn
			//       :dataType="resource.DataTypeColumn.String"
			//       :prop="'ApplyObject'"
			//       :label="'Đối tượng khen thưởng'"
			//       :width="'180px'"
			//     />
			//     <BaseTableColumn
			//       :dataType="resource.DataTypeColumn.String"
			//       :prop="'CommendationLevel'"
			//       :label="'Cấp khen thưởng'"
			//       :width="'200px'"
			//     />
			//     <BaseTableColumn
			//       :dataType="resource.DataTypeColumn.String"
			//       :prop="'MovementType'"
			//       :label="'Loại phong trào'"
			//       :width="'200px'"
			//     />
			//     <BaseTableColumn
			//       :dataType="resource.DataTypeColumn.String"
			//       :prop="'IsActive'"
			//       :label="'Trạng thái'"
			//       :width="'200px'"
			//     />
			//   </BaseTable>
			//   var button = document.createElement(`<BaseButton
			//     class="button button-icon button-style1 icon-plus"
			//     >Thêm danh hiệu</BaseButton
			//   >`);
		},
	},
};
