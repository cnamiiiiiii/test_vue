<template>
  <div class="container">
    <div class="left-layout">
      <draggable
        v-model="cards"
        class="card-list"
        @start="drag = true"
        @end="drag = false"
      >
        <template #item="{ element }">
          <div
            :key="element.id"
            class="card"
            @click="
              onCardClick(
                element.url,
                element.image,
                element.rightImg1,
                element.rightImg2,
                element.rightImg3
              )
            "
          >
            <img :src="require(`@/assets/${element.image}`)" alt="Image" />
            <p>{{ element.title }}</p>
          </div>
        </template>
      </draggable>
    </div>

    <!-- 오른쪽 레이아웃: 선택된 카드에 따른 상세 정보 -->
    <div class="right-layout" v-if="selectedImage">
      <h2>세입세출 어쩌구</h2>

      <!-- 상단에 2개의 이미지 배치 -->
      <div class="top-images">
        <img :src="require(`@/assets/${rightImg1}`)" alt="Selected Image 1" />
        <img :src="require(`@/assets/${rightImg2}`)" alt="Selected Image 2" />
      </div>

      <!-- 하단에 1개의 이미지 배치 -->
      <div class="bottom-image">
        <img :src="require(`@/assets/${rightImg3}`)" alt="Selected Image 3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

// 상태 선언
const cards = ref([
  {
    id: 1,
    title: "이미지 1",
    image: "11.png",
    url: "https://naver.com/",
    rightImg1: "111.png",
    rightImg2: "222.png",
    rightImg3: "333.png",
  },
  {
    id: 2,
    title: "이미지 2",
    image: "22.png",
    url: "https://naver.com/",
    rightImg1: "222.png",
    rightImg2: "333.png",
    rightImg3: "111.png",
  },
  {
    id: 3,
    title: "이미지 3",
    image: "33.png",
    url: "https://naver.com/",
    rightImg1: "333.png",
    rightImg2: "111.png",
    rightImg3: "222.png",
  },
]);

const selectedUrl = ref(null);
const selectedImage = ref(null);
const rightImg1 = ref(null);
const rightImg2 = ref(null);
const rightImg3 = ref(null);

// 카드 클릭 시 이미지와 URL 설정
const onCardClick = (url, clickImg, img1, img2, img3) => {
  selectedUrl.value = url;
  selectedImage.value = clickImg;
  rightImg1.value = img1;
  rightImg2.value = img2;
  rightImg3.value = img3;
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.left-layout {
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.card:hover {
  transform: scale(1.05);
}

.right-layout {
  width: 70%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.top-images {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.top-images img {
  width: 48%;
  height: auto;
  border-radius: 5px;
}

.bottom-image {
  text-align: center;
}

.bottom-image img {
  width: 80%;
  height: auto;
  border-radius: 5px;
}
</style>
