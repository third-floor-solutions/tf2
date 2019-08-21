<template>
  <div>
    <label class="contact-us-btn noselect" :for="uniqStr" :style="style">
      <slot>Contact Us</slot>
    </label>
    <input type="checkbox" v-model="state" name="modal__state" :id="uniqStr" class="modal__state" />

    <div class="modal__container">
      <div class="modal">
        <div class="modal-wrapper">
          <h1 class="modal-label">Let's talk and make things happen.</h1>
          <form  ref="form" @submit="submit" class="w-full max-w-lg">
            <div class="user-info">
              <div class="form-input-container user-info-container">
                <label class="form-label">First Name</label>
                <input
                  class="form-input"
                  name="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                />
                <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
              </div>
              <div class="form-input-container user-info-container">
                <label class="form-label" for="grid-last-name">Last Name</label>
                <input
                  class="form-input"
                  name="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                />
              </div>
              <div class="form-input-container">
                <label class="form-label">Email</label>
                <input class="form-input" name="email" v-model="form.email" type="email" required />
              </div>
            </div>
            <div class="form-input-container">
              <label class="form-label">Message</label>
              <textarea
                required
                @keypress="onMessageKeypress"
                class="form-input"
                type="textarea"
                name="message"
                rows="7"
                v-model="form.message"
                placeholder="Tell us about your idea or project (Shift + Enter for new line)
"
              ></textarea>
            </div>

            <div class="form-input-container submit-btn-container">
              <label class="btn-close" :for="uniqStr">I changed my mind.</label>
              <input type="submit" class="contact-us-btn" value="Send" />
            </div>

            <input ref="submitter" type="submit" class="contact-us-btn hidden-submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["bgColor", "txtColor"],
  data() {
    return {
      state: false,
      form: {
        firstName: null,
        lastName: null,
        email: null,
        message: null
      }
    };
  },
  watch: {
    state(v) {
      if (v) {
        window.document.body.style.overflowY = "hidden";
      } else {
        window.document.body.style.overflowY = "auto";
      }
    }
  },
  computed: {
    uniqStr() {
      return `input_${this._uid}_state`;
    },
    style() {
      return {
        "background-color": this.bgColor,
        color: this.txtColor
      };
    }
  },
  methods: {
    submit(e) {
      window.document.body.classList.add("waiting");
      // Do the request here
      setTimeout(() => {
        window.document.body.classList.remove("waiting");
      }, 3000)
      return e.preventDefault();
    },
    onMessageKeypress(e) {
      if (event.keyCode == 13 && !event.shiftKey) {
        this.$refs["submitter"].click();
        return e.preventDefault();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/screen-size.scss";

.contact-us-btn {
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: 700;
  border-radius: 0.25rem;
  text-transform: uppercase;
  outline: none;
}

.hidden-submit {
  display: none;
}

.submit-btn-container {
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
}

.btn-close {
  color: #4a5568;
  cursor: pointer;
}

.contact-us-btn {
  background: #ecc94b;
  color: #2d3748;
}
.modal__container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  z-index: 9999;
}

.modal__state:checked + .modal__container {
  opacity: 1;
  animation: fade-in 0.4s;
  display: block;
}

.modal {
  position: relative;
  padding: 2rem;
  text-align: left;
  //   box-shadow: 0px 0px 38px rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  //   border-radius: 0.25rem;
  color: blue;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: auto;
}

.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

/* the input[type=radio] that's toggled when the label is clicked */
.modal__state {
  display: none;
}

.modal-label {
  color: #4a5568;
  font-weight: 700;

  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-bottom: 3rem;
}

.user-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.modal-wrapper {
  padding: 3rem 0;
}

.user-info-container:not(:last-child) {
  margin-bottom: 1rem;
}

.user-info-container {
  // w-full md:w-1/2 px-3
  width: 100%;
}

.form-input-container {
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.form-label {
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #4a5568;
  font-weight: 700;
  display: block;
  margin-bottom: 0.5rem;
}

.form-input {
  // appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
  display: block;
  width: 100%;
  color: #4a5568;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.25;
  border-radius: 0.25rem;
  width: 100%;
  border: 1px solid #edf2f7;
  background-color: #edf2f7;
  appearance: none;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  outline: 0;
}

.form-input:focus {
  background-color: #ffffff;
  border: 1px solid #a0aec0;
}

textarea.form-input {
  resize: vertical;
}

@media (min-width: $md) {
  .user-info-container {
    width: 50%;
  }
}

@media (min-width: $lg) {
}
</style>
