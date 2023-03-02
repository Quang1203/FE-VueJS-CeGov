<template>
    <div class="header">
            <div class="header__left">
                <div class="header-left__icon-bar" title="Danh mục chức năng">
                    <div class="icon icon-24 icon--nav-apps"></div>
                </div>
                <div class="header-left__icon-logo" title="Trợ giúp">
                    <div class="icon icon-32 icon--logo"></div>
                </div>
                <span class="title">MISA CeGov</span>
            </div>
            <div class="header__right">
                <div class="header__notification" title="Thông báo">
                    <div class="icon icon-24 icon--bell"></div>
                </div>
                <div class="header-left__icon-help" title="Trợ giúp">
                    <div class="icon icon-24 icon--help"></div>
                </div>
                <div class="header__user">
                    <img src="../../assets/icon/getavatar.png" alt="" class="header__user-img">
                    <ul class="header__user-menu">
                        <li class="header__user-item">
                            <a href="">Tài khoản của tôi</a>
                        </li>
                        <li class="header__user-item">
                            <a href="">Thông tin của tôi</a>
                        </li>
                        <li class="header__user-item">
                            <a href="">Tùy chọn</a>
                        </li>
                        <li class="header__user-item">
                            <a href="">Đăng xuất</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header {
        display: flex;
        height: 56px;
        justify-content:space-between;
        width: 100%;
        box-shadow: inset 0 1.5px 2px 0 rgb(0 0 0 / 10%);


    }

    .header__left {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16px;
        font-size: 13px;

    }
    .header-left__icon-bar {
        padding: 0 16px 0 0;
        font-size: 16px;

    }

    .header-left__icon-help {
        font-size: 16px;
        padding-right: 12px;
    }

    .header__left .title {
        margin-left: 12px;
        font-size: 20px;
        font-weight: 700;
    }

    .header__right {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content:end;
        flex: 1;
        padding: 0 8px;
        height: 100%;

    }

    .header__notification {
        position: relative;
        margin-right: 18px;
    }

    /* .header__notification::after {
        content: "";
        display: block;
        position: absolute;
        border-right: 1px solid #ccc;
        height: 22px;
        right: -16px;
        top: 50%;
        transform: translateY(-50%);
    } */

    .header__notification i {
        font-size: 20px;
    }
    .header__notification--new {
        position: absolute;
        border-radius: 50%;
        border: 1px solid #EE4D2D;
        background-color: #EE4D2D;
        width: 6px;
        height: 6px;
        top: 2px;
        right: -3px;
    }


    .header__user {
        display: flex;
        justify-items: center;
        align-items: center;
        position: relative;
        height: 100%;
    }

    .header__user-img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-left: 8px;
    }

    .header__user-name {
        font-weight: 400;
        margin-right: 16px;
    }

    .header__user:hover .header__user-menu{
        display: block;
    }

    .header__user-menu {
        position: absolute;
        padding-left: 0px;
        top: calc(100% - 5px);
        width: 180px;
        right: -16px;
        list-style: none;
        background-color: #EEEEEE;
        border-radius: 2px;
        z-index: 2;
        box-shadow: 0 1px 2px #e0e0e0e4;
        display: none;
        animation: fadeIn ease-in 0.2s;
        border: #EEEEEE;
        box-shadow: 0 1px 2px #e0e0e0f5;

    }

    .header__user-menu::before {
        z-index: 1;
        content: "";
        border-style: solid;
        border-width: 20px 23px ;
        border-color: transparent transparent #EEEEEE transparent;
        position: absolute;
        right: 8px;
        top: -40px;
    }

    .header__user-menu::after{
        content: "";
        display: block;
        position: absolute;
        top: -8px;
        right: 0;
        width: 90%; 
        height: 8px;
        background-color: O#000;
    }


    .header__user-item a{
        text-decoration: none;
        color: var(--text-color);
        padding: 10px 16px;
        display: block;
        text-align: center;

    }

    .header__user-item a:first-child{
       border-top-left-radius: 2px;
       border-top-right-radius: 2px;
    }

    .header__user-item a:last-child{
       border-bottom-left-radius: 2px;
       border-bottom-right-radius: 2px;
    }

    .header__user-item a:hover{
        background-color: #ccc;
    }

    /* Animation */
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

</style>