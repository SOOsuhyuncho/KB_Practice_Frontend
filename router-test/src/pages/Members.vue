<template>
  <div class="card card-body">
    <h2>Members</h2>
    <p>요청 경로 : {{ currentRoute.fullPath }}</p>
    <p>요청 경로 : {{ currentRoute.path }}</p>
    <!-- fullPath : 쿼리까지 포함된 전체 경로 -->
     <!-- path: 쿼리 -->
      <!-- params: {id: mem.id}
       -> index.js에 작성된 path의 변수명(:id)과 params 키 값(id)이 동일해야함 -->
      <!-- <router-link :to ="{name:'members/id', params: {id: mem.id}}"></router-link> -->
  </div>
  <div>
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <div
          v-for="mem in members"
          :key="mem.id"
          class="col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <!-- 동적 라우트 : 라우트 경로에 변수를 포함시키는 방식
            ex) /members/1, members/2 ... -->
            <!--  -->
          <router-link :to="'/members/' + mem.id">
            <img
              class="img-thumnail"
              style="width: 90px; height: 110px"
              :src="mem.photo"
            />
            <!-- :속성 = JS 표현식 넣기 -->
            <br />
            <h6 class="display-7">{{ mem.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/// members.json 파일을 가져오기
// -> json 파일 정보를 읽어와서 자동으로 js 객체로 변환
// (JSON.parse() 함수 사용 효과

import members from '@/members.json';

// useRoute : 현재 라우트 정보를 가져오는 함수
// -> URL 경로 , params, query, fullPath 등 현재 상태를 읽을 때 사용

// useRouter: 라우터 인스턴스를 가져오는 함수
//-> 페이지 이동/변경 담당하는 함수
// -> push(), replace(), back() 등으로 라우팅 제어
import { useRoute, useRouter } from 'vue-router';
export default {
  name: 'Members',
  setup() {
    const currentRoute = useRoute();
    const router = useRouter();
    
    return { members, currentRoute, router };
  },
};

</script>

<style scoped></style>
