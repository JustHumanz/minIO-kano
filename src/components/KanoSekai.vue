<template>
    <div class="kano">
    <div class="p-4 d-flex justify-content-center">
        <h4>Kano is Cute,Cute is Kano</h4>
    </div>
        <div class="text-center p-5 ">
            <div class="row row-cols-1 row-cols-md-4">
                <div class="col mb-4" v-for='m in Oss' :key='m.name'>
                    <div v-bind:id=m.name class="card">
                    <img v-bind:src=m.url class="card-img-top" v-bind:alt=m.name>
                    <div class="card-body">
                        <h5 class="card-title">@{{ m.author }}</h5>
                        <a v-bind:href=m.source class="btn btn-primary">Source</a>
                    </div>                    
                    </div>
                </div>               
            </div>
        </div>
  </div>
</template>

<script>
import * as min from '../minio'

export default {
  name: 'KanoSekai',
  data() {
      return {
          Oss: min.getBktList(),
          files: null,
          text: ''
      };
  }
}
</script>
