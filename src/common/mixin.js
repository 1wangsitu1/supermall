import {
  debounce
} from "./utils";
import BackTop from "components/content/backtop/BackTop";
export const ListenerMixin = {
  data() {
    return {
      imgListener: null,
      refsh: null
    }
  },
  mounted() {
    this.refsh = debounce(this.$refs.scroll.refresh, 200);
    this.imgListener = () => {
      this.refsh();
    };
    this.$bus.$on(
      "imgload", this.imgListener
    );
  },
};
export const backTop = {
  data() {
    return {
      isShow: false,
      taboffsetTop: 0,

    }
  },
  components: {
    BackTop
  },
  methods: {
    back() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    backding(position) {
      if (-position.y > 1000) {
        return (this.isShow = true);
      } else {
        this.isShow = false;
      }
    }
  },

}
