<script setup>
const initialValues = ref({
  movieName: "",
});

const searchResult = ref("");

const resolver = ({ values }) => {
  const errors = [];
  const validationErrors = useValidateMovieName(values.movieName);

  if (validationErrors.length > 0) {
    errors.movieName = validationErrors;
  }

  return {
    errors,
  };
};
</script>

<template>
  <div class="">
    <Toast />

    <Form
      v-slot="$form"
      :initialValues
      :resolver
      class="flex items-start gap-4 w-full mb-6"
    >
      <div>
        <InputText
          name="movieName"
          type="text"
          placeholder="search movie"
          fluid
          v-model="searchResult"
        />
        <Message
          v-if="$form.movieName?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >
          {{ $form.movieName.error?.message }}
          </Message
        >
      </div>
    </Form>

    <MovieList :search="searchResult" :isSearch="true" />
  </div>
</template>
