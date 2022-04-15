<script lang="tsx">
  import { defineComponent, reactive } from 'vue';

  interface LabelProps {
    content: string;
  }
  const Label = defineComponent({
    setup(props: LabelProps) {
      return () => {
        const { content } = props;  // 在这里对props做解构赋值
        return <span>{content}</span>;
      }
    }
  })
</script>
