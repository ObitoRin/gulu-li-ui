<demo>
  支持显示加载中
  </demo>
  <template>
  <div>
    <Button loading>加载中</Button>
    <Button level="primary" loading>加载中</Button>
  </div>
</template>
  
<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>