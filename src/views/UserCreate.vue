<template>
    <div class="container">
      <div class="form-container">
        <h2 class="text-center mb-4">Thêm Khách Hàng</h2>
        <div>
          <div class="form-group">
            <label>Tên Người dùng:</label>
            <input
              v-model="fullName"
              type="text"
              class="form-control"
              placeholder="Nhập đường dẫn hình ảnh sản phẩm"
            />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Nhập email"
            />
          </div>
          <div class="form-group">
            <label>Địa chỉ: </label>
            <input
              v-model="diachi"
              type="text"
              class="form-control"
              placeholder="Nhập địa chỉ"
            />
          </div>
          <div class="form-group">
            <label>Số điên thoại:</label>
            <input
              v-model="phone"
              type="text"
              class="form-control"
              placeholder="Nhập số điện thoai"
            />
          </div>
          <div class="container-btn">
            <router-link to="/user">
              <button class="btn btn-comeback">Quay lại</button>
            </router-link>
            <button @click="create" class="btn btn-create">Thêm khách hàng</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { ref } from "vue";
  import userService from "../services/user.service";
  
  export default {
    setup() {
      const fullName = ref();
      const email = ref();
      const diachi = ref();
      const phone = ref();

      const create = async () => {
        try {
          const res = await userService.create({
            fullName: fullName.value,
            email: email.value,
            //size: sizeArray.value,
            diachi: diachi.value,
            phone: phone.value,
          });
        } catch (error) {
          console.log(error);
        }
      };
      return {
        fullName,
        email,
        diachi,
        phone,
        create,
      };
    },
  };
  </script>
  
  
  <style>
  body {
    background-color: #f8f9fa;
    font-family: "Arial", sans-serif;
  }
  
  .container {
    margin-top: 20px;
    justify-content: center;
    display: flex;
  }
  
  .form-container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 70%;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  h2 {
    font-weight: bold;
    background-color: #7b60f5;
    padding: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  .container-btn {
    display: flex;
    justify-content: center;
  }
  
  .btn-create,
  .btn-comeback {
    background-color: #5e2fca;
    color: #fff;
    margin-left: 30px;
    margin-right: 30px;
  }
  
  .checkbox {
    margin-left: 10px;
    margin-right: 5px;
  }
  </style>
  