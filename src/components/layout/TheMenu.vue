<template>
    <div class="menu">
        <div class="menu-list">
            <div class="menu-item" title="Tổng quan hệ thống">
                <div class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-dashboard"> </div>
                    <div class="menu-item__text"><b>Tổng quan</b> </div> 
                </div>
            </div>
            <div class="menu-item" title="Thi đua">
                <div class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-movement"> </div>
                    <div class="menu-item__text"><b>Thi đua</b></div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="menu-item" title="Khen thưởng">
                <div class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-reward"> </div>
                    <div class="menu-item__text"><b>Khen thưởng</b></div>    
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="menu-item" title="Quyết định">
                <div class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-decision"> </div>
                    <div class="menu-item__text"><b>Quyết định</b> </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="menu-item" title="Hồ sơ">
                <div class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-profile"> </div>
                    <div class="menu-item__text"><b>Hồ sơ</b> </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="menu-item" title="Tra cứu">
                <div class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-search"> </div>
                    <div class="menu-item__text"><b>Tra cứu</b> </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="menu-item" title="Báo cáo">
                <div class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-report"> </div>
                    <div class="menu-item__text"><b>Báo cáo</b> </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="border--bottom"></div>
            <div class="menu-item" title="Danh mục">
                <router-link to="/category" class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-category"> </div>
                    <div class="menu-item__text"><b>Danh mục</b> </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </router-link>
            </div>
            <div class="menu-item" title="Thiết lập">
                <div class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-setting"> </div>
                    <div class="menu-item__text"><b>Thiết lập</b> </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="border--bottom"></div>
            <div class="menu-item" title="Hướng dẫn">
                <div class="menu-item__link">
                    <div class="menu-item__icon menu-item__icon-guide"> </div>
                    <div class="menu-item__text"><b>Hướng dẫn</b> </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>

            <div class="menu-item" title="Thu gọn">
                <div class="menu-item__button">
                    <div class="menu-item__icon menu-item__icon-toggle"> </div>
                    <div class="menu-item__text">Thu gọn</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .menu {
        width: 204px;
        /* background-color: #24344B; */
        background: #fff;
        height: calc(100vh - 56px);
        box-shadow: inset 0 1.5px 2px 0 rgb(0 0 0 / 10%);
        box-shadow: inset 0 1.5px 2px 0 rgb(0 0 0 / 10%);

    }

    .menu-list {
        position: relative;
        list-style: none;
        /* padding-top: 16px; */
        width: 100%;
        margin-top: 4px;
        height: 100%;
    }

    .menu-item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        /* padding-top: 10px;
        padding-bottom: 4px; */
        color: var(--text-color);
        height: 45px;
        width: 100%;
        cursor: pointer;
        color: #fff;
        margin: 4px 0;

    }

    .menu-item--active a {
        background-color: #fbe9e7;
        color: #ff5722;

    }

    .menu-item__link.router-link-active {
        background-color: #fbe9e7;
        color: #ff5722;
    }

    .menu-item__link.router-link-active .menu-item__text{
        color: #ff5722;
    }

    .menu-item a{
        width: 100%;
        height: 100%;
    }

    .menu-item__link {
        position: relative;
        color: #121212;
    }

    .menu-item__link i {
        color: #121212;
    }

    .menu-item__link i {
        position: absolute;
        right: 20px;
        top: 50%;
        font-size: 12px;
        transform: translateY(-50%);
    }


    .menu-item .menu-item__link:hover,
    .menu-item .menu-item__link:hover i {
        background-color: #eff7ff;
        color: #ff5722;
    }

    .menu-item .menu-item__link:hover .menu-item__text {
        color: #ff5722;
    }

    .menu-item__link.router-link-active i {
        color: #ff5722;
    }

    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-dashboard,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-dashboard{
        background-image: url(../../assets/icon/ic_dashboard.41eba193.svg);
    }

    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-movement,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-movement{
        background-image: url(../../assets/icon/ic_movement.629f9e51.svg);
    }

    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-reward,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-reward{
        background-image: url(../../assets/icon/ic_reward.025cd252.svg);
    }
    
    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-decision,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-decision {
        background-image: url(../../assets/icon/ic_decision_menu.3fd2f620.svg);
    }

    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-profile,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-profile {
        background-image: url(../../assets/icon/ic_profile.628cd9e5.svg);
    }

    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-search,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-search {
        background-image: url(../../assets/icon/ic_search.3b67786b.svg);
    }

    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-report,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-report {
        background-image: url(../../assets/icon/ic_report.87c66795.svg);
    }

    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-category,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-category{
        background-image: url(../../assets/icon/ic_category.f257fcc6.svg);
    }

    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-setting,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-setting{
        background-image: url(../../assets/icon/ic_setting.ed993518.svg);
    }

    .menu-item .menu-item__link:hover .menu-item__icon.menu-item__icon-guide,
    .menu-item__link.router-link-active .menu-item__icon.menu-item__icon-guide{
        background-image: url(../../assets/icon/ic_guide.b54f8d8a.svg);
    }

    .menu-item__link {  
        display: flex;
        align-items: center;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.856);
        font-size: 13px;
        width: 188px;
        height: 41.6px;
        margin: 8px;
        border-radius: 4px;

    }

    .menu-item__icon {
        padding-right: 8px;
        
    }

    .menu-item__icon-dashboard {
        background-image: url(../../assets/icon/ic_dashboard_default.110fa5f3.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-movement {
        background-image: url(../../assets/icon/ic_movement_default.102c9e3d.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-reward {
        background-image: url(../../assets/icon/ic_reward_default.156d6945.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-decision {
        background-image: url(../../assets/icon/ic_decision_menu_default.cae653f2.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-profile {
        background-image: url(../../assets/icon/../../assets/icon/ic_profile_default.d730fb8f.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-search {
        background-image: url(../../assets/icon/ic_search_default.903d371b.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-report {
        background-image: url(../../assets/icon/ic_report_default.67157268.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-category {
        background-image: url(../../assets/icon/ic_category_default.d46f95b8.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-setting {
        background-image: url(../../assets/icon/ic_setting_default.be222d4a.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-guide {
        background-image: url(../../assets/icon/ic_guide_default.186420dc.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__icon-toggle {
        background-image: url(../../assets/icon/ic_toggle.4abb3c52.svg);
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
        margin-left: 12px;
    }

    .menu-item__button {
        position: absolute;
        display: flex;
        align-items: center;
        text-decoration: none;
        background-color: #edf1f5;
        width: 188px;
        height: 41.6px;
        margin: 8px;
        border-radius: 4px;
        bottom: 20px;
    }

    .menu-item__text {
        color: #121212;
        font-weight: 500;
        padding-left: 16px;
        font-size: 14px;
    }

    .border--bottom {
        border: 1px solid 	#DDDDDD;
        width: 188px;
        margin: 8px;

    }

    .menu-item .menu-item__link.router-link-active {
        background-color: #fbe9e7;
        color: #ff5722;
    }

</style>