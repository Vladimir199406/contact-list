<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">

        <header class="modal-header">
          <slot name="header">
            Подтвердите удаление элемента
          </slot>
        </header>

        <section class="modal-body">
          <slot name="body">
            Body
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-close" v-on:click="close">
              Отменить удаление
            </button>
            <button type="button" class="btn-green" v-on:click="confirmToDelete">
              Удалить элемент
            </button>
          </slot>
        </footer>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "vOneModalWindow",

  methods: {
    close(){
      this.$emit('close');
    },
    confirmToDelete(){
      this.$emit('confirmToDelete');
    }
  },
}
</script>

<style scoped>

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  border-radius: 0.4rem;
  color: black;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
}

.modal-header, .modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: brown;
}

.btn-green {
  color: white;
  cursor: pointer;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

.modal-fade-enter, .modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 1s ease
}
</style>
