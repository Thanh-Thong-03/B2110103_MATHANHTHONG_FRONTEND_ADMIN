<template>
  <div class="container">
    <div class="form-container">
      <h2 class="text-center mb-4">Sửa Sản Phẩm</h2>
      <div>
        <div class="form-group">
          <label>Hình Sản Phẩm:</label>
          <input
            v-model="hinh"
            type="text"
            class="form-control"
            placeholder="Nhập đường dẫn hình ảnh sản phẩm"
          />
        </div>
        <div class="form-group">
          <label>Tên Sản Phẩm:</label>
          <input
            v-model="ten"
            type="text"
            class="form-control"
            placeholder="Nhập tên sản phẩm"
          />
        </div>
        <div class="form-group">
          <label>Loại Sản Phẩm: </label>
          <br />
          <select v-model="loai">
            <option>Camera Bullet</option>
            <option>Camera Discreet</option>
            <option>Camera Dome</option>
            <option>Camera IP</option>
            <option>Camera Wifi</option>
          </select>
        </div>
        <div class="form-group">
          <label>Số lượng hàng:</label>
          <input
            v-model="soluonghang"
            type="text"
            class="form-control"
            placeholder="Nhập số lượng sản phẩm"
          />
        </div>
        <div class="form-group">
          <label>Giá Sản Phẩm:</label>
          <input
            v-model="gia"
            type="text"
            class="form-control"
            placeholder="Nhập giá sản phẩm"
          />
        </div>
        <div class="form-group">
          <label for="productDescription">Mô tả Sản Phẩm:</label>
          <textarea
            v-model="mota"
            class="form-control"
            rows="3"
            placeholder="Nhập mô tả sản phẩm"
          ></textarea>
        </div>
        <div class="container-btn">
          <router-link to="/product">
            <button class="btn btn-comeback">Quay lại</button>
          </router-link>
          <button @click="update" class="btn btn-create">Sửa Sản Phẩm</button>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import productService from "../services/product.service";

export default {
  setup() {
    //const sizeArray = ref([]);
    const hinh = ref();
    const ten = ref();
    const loai = ref();
    const soluonghang = ref();
    const gia = ref();
    const mota = ref();
    const route = useRoute();
    const id = route.params.id;

    // const handleChange = (e) => {
    //   sizeArray.value.push(e.target.value);
    // };

    onBeforeMount(async () => {
      try {
        const res = await productService.get(id);
        hinh.value = res.hinh;
        ten.value = res.ten;
        loai.value = res.loai;
        //sizeArray.value = res.size;
        soluonghang.value = res.soluonghang;
        gia.value = res.gia;
        mota.value = res.mota;
      } catch (error) {
        console.log(error);
      }
    });

    const update = async () => {
      try {
        await productService.update(id, {
          hinh: hinh.value,
          ten: ten.value,
          loai: loai.value,
          soluonghang: soluonghang.value,
          gia: gia.value,
          mota: mota.value,
        });
      } catch (error) {
        console.log(error);
      }
    };
    return {
      hinh,
      ten,
      loai,
      soluonghang,
      gia,
      mota,
      update,
      //handleChange,
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
  