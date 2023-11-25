<template>
  <div class="container">
    <div class="form-container">
      <h2 class="text-center mb-4">Chi tiết Sản Phẩm</h2>
      <form>
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
          <label>Kích thước:</label>
          <br />
          <input v-model="size" class="checkbox" type="checkbox" value="S" />S
          <input v-model="size" class="checkbox" type="checkbox" value="M" />M
          <input v-model="size" class="checkbox" type="checkbox" value="L" />L
          <input v-model="size" class="checkbox" type="checkbox" value="XL" />XL
          <br />
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
        <router-link to="/product">
          <button class="btn btn-add btn-block">Quay lại</button>
        </router-link>
      </form>
    </div>
  </div>
</template>
  <script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import productService from "../services/product.service";

export default {
  setup() {
    const route = useRoute();
    const hinh = ref();
    const ten = ref();
    const size = ref();
    const soluonghang = ref();
    const gia = ref();
    const mota = ref();
    const size1 = ref();
    const size2 = ref();
    const size3 = ref();
    const size4 = ref();

    onBeforeMount(async () => {
      try {
        const res = await productService.get(route.params.id);
        (hinh.value = res.hinh), (ten.value = res.ten);
        size.value = res.size;
        soluonghang.value = res.soluonghang;
        gia.value = res.gia;
        mota.value = res.mota;
        size1.value = res.size1;
        size2.value = res.size2;
        size3.value = res.size3;
        size4.value = res.size4;
      } catch (error) {
        console.log(error);
      }
    });

    return {
      hinh,
      ten,
      size,
      soluonghang,
      gia,
      mota,
      size1,
      size2,
      size3,
      size4,
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

.btn-add {
  background-color: #5e2fca;
  color: #fff;
}

.checkbox {
  margin-left: 10px;
  margin-right: 5px;
}
</style>
  