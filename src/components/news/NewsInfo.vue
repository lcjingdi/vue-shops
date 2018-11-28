<template>
  <div>
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr />
    <div class="content" v-html="newsinfo.content"></div>

    <comment :id="this.id"></comment>
  </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
  data: function() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created: function() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo: function() {
      this.newsinfo = { title: "习近平会见西班牙国王费利佩六世", add_time: "1999.20.20", click: "8888",content: "<p>当地时间11月27日，国家主席习近平在马德里萨苏埃拉宫会见西班牙国王费利佩六世。</p><p>习近平表示，很高兴应费利佩六世国王邀请到访美丽的西班牙。2005年中西建立全面战略伙伴关系以来，两国关系水平不断提升，政治互信日益增强，合作领域不断拓展，民间交往更加密切。中西关系正处在历史最好时期。我对中西关系发展前景充满信心。这次访问西班牙是我连任中国国家主席后首次访问欧洲，也是这次欧洲拉美之行第一站，希望通过此访巩固两国友谊，提升合作水平，使中西关系行稳致远。</p><p>习近平强调，中国愿同西班牙继续在涉及彼此核心利益和重大关切问题上相互支持。双方要在“一带一路”框架内加强经贸、旅游、第三方市场等合作，推动中西全面战略伙伴关系在新时代迈上新台阶，更好造福两国人民。</p><p>习近平指出，中国乐见欧洲持续推进一体化进程，希望西班牙继续为推动中欧全面战略伙伴关系发展发挥积极作用。</p><p>费利佩六世表示，热烈欢迎习近平主席对西班牙进行国事访问。今年是西中建交45周年，也是西班牙前国王胡安·卡洛斯一世首次访华40周年。西班牙珍视同中国的友好交往和合作。两国建交以来，一贯在涉及彼此核心利益的问题上相互尊重和支持。在双方共同努力下，两国全面战略伙伴关系不断得到新发展。西方愿同中方继续保持密切交往，提升务实合作水平，加强在多边事务中的沟通和协调，积极推动深化欧中关系。</p><p>王毅参加会见。</p><p>当晚，习近平和夫人彭丽媛出席费利佩六世和王后莱蒂西娅举行的家宴。</p>" };
    }
  },
  components: {
      comment
  }
};
</script>

<style lang="scss" scoped>
</style>
