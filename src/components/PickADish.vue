<template>
  <div style="background-color: #e8e8e8">
    <div class="card-body">
      <v-btn
        color="primary"
        class="btn btn-primary mr-6"
        @click="pickADishIndexForEachDay"
      >
        Pick a dish for each day of the week
      </v-btn>
      <v-dialog v-model="dialogField" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            New Item
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-for="(value, key, index) in editedItem"
                    :key="index"
                    v-model="editedItem[key]"
                    :label="editedItemTitle[key]"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
            <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <div v-if="!dataLoaded">
        <v-container style="height: 400px">
          <v-row class="fill-height" align-content="center" justify="center">
            <v-col class="subtitle-1 text-center" cols="12"
              >Loading data...</v-col
            >
            <v-col cols="6">
              <v-progress-linear
                color="deep-purple accent-4"
                indeterminate
                rounded
                height="6"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-timeline
        v-if="dataLoaded"
        :dense="$vuetify.breakpoint.smAndDown"
        class="mr-7 ml-7"
      >
        <v-lazy
          v-for="(value, index) in daysOfTheWeekData"
          :key="index"
          v-model="value.isActive"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-timeline-item
            :color="value.color"
            fill-dot
            :[value.fill_dot]="true"
          >
            <template v-slot:opposite>
              <h1>{{ value.day }}</h1>
            </template>
            <v-card>
              <v-card-title :class="value.class">
                <v-icon dark size="42" class="mr-4">{{ value.icon }}</v-icon>
                <h3 class="white--text font-weight-medium flex-nowrap">
                  {{ dishes[dishesIndexList[index]].dish_name }}
                </h3>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="8">
                    <h3>Składniki</h3>
                    <v-divider class="my-2"></v-divider>
                    {{ dishes[dishesIndexList[index]].ingredients }}
                  </v-col>
                  <v-col class="hidden-sm-and-down text-right" md="4">
                    <h3 class="align-right">Przepis</h3>
                    <v-divider class="my-2"></v-divider>
                    <div class="align-right">
                      <v-dialog v-model="value.dialog" width="500">
                        <template v-slot:activator="{ on }">
                          <v-icon v-on="on" size="64">mdi-calendar-text</v-icon>
                        </template>
                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            <span>
                              {{ dishes[dishesIndexList[index]].dish_name }} -
                              przepis
                            </span>
                          </v-card-title>
                          <v-card-text>{{
                            dishes[dishesIndexList[index]].recipe
                          }}</v-card-text>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-lazy>
      </v-timeline>
    </div>
  </div>
</template>


<script>
// import { db } from '@/main'
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { db } from "@/main";

export default {
  data: () => ({
    selectedDish: {},
    dialogField: false,
    editedIndex: -1,
    editedItem: {
      id: new Date().getTime(),
      dish_name: "",
      dish_type: "",
      ingredients: "",
      recipe: "",
    },
    editedItemTitle: {
      id: "ID",
      dish_name: "Dish name",
      dish_type: "Dish type",
      ingredients: "Ingredients",
      recipe: "Recipe",
    },
    defaultItem: {
      id: new Date().getTime(),
      dish_name: "",
      dish_type: "",
      ingredients: "",
      recipe: "",
    },
    dishesIndexList: [],
    dataLoaded: false,
    daysOfTheWeekData: [
      {
        isActive: false,
        color: "purple lighten-2",
        fill_dot: "right",
        day: "Monday",
        class: "purple lighten-2",
        icon: "fas fa-egg",
        dialog: false,
      },
      {
        isActive: false,
        color: "amber lighten-1",
        fill_dot: "left",
        day: "Tuesday",
        class: "amber lighten-1 justify-end",
        icon: "fas fa-drumstick-bite",
        dialog: false,
      },
      {
        isActive: false,
        color: "cyan lighten-1",
        fill_dot: "right",
        day: "Wednesday",
        class: "cyan lighten-1",
        icon: "fas fa-pizza-slice",
        dialog: false,
      },
      {
        isActive: false,
        color: "red lighten-1",
        fill_dot: "left",
        day: "Thursday",
        class: "red lighten-1 justify-end",
        icon: "fas fa-hamburger",
        dialog: false,
      },
      {
        isActive: false,
        color: "green lighten-1",
        fill_dot: "right",
        day: "Friday",
        class: "green lighten-1",
        icon: "fas fa-fish",
        dialog: false,
      },
      {
        isActive: false,
        color: "pink lighten-1",
        fill_dot: "left",
        day: "Saturday",
        class: "pink lighten-1 justify-end",
        icon: "fas fa-hotdog",
        dialog: false,
      },
      {
        isActive: false,
        color: "yellow",
        fill_dot: "right",
        day: "Sunday",
        class: "yellow",
        icon: "fas fa-carrot",
        dialog: false,
      },
    ],
  }),

  mounted() {
    this.getDishIndexList();
  },

  computed: {
    ...mapState(["dishes"]),
    ...mapGetters({
      user: "user",
    }),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialogField(val) {
      val || this.close();
    },
  },

  methods: {
    async getDishes() {
      await this.$store.dispatch("setDishes");
    },

    pickADishIndexForEachDay() {
      this.dishesIndexList = [];
      const numberOfDishes = this.dishes.length;
      const dishIndexNumbers = [];
      // const vegetarianDishIndexNumbers0 = []
      const vegetarianDishIndexNumbers = [];

      // Get indexes numbers of all dishes
      for (let i = 0; i < numberOfDishes; i++) {
        dishIndexNumbers.push(i);
      }

      // for ( let i = 0; i < numberOfDishes; i++ ) {
      //   if ( this.dishes[i].dish_type === "vegetarian_dish")
      //   vegetarianDishIndexNumbers0.push(i);
      // }

      // Get indexes number of vegetarian dishes
      this.dishes.forEach((dish, index) => {
        if (dish.dish_type === "vegetarian_dish") {
          vegetarianDishIndexNumbers.push(index);
        }
      });

      const randomVegetarianDishIndexNumber =
        vegetarianDishIndexNumbers[
          Math.floor(Math.random() * vegetarianDishIndexNumbers.length)
        ];

      // Add indexes for Monday to Sunday
      let randomDishIndex = [];
      while (this.dishesIndexList.length < 7) {
        randomDishIndex =
          dishIndexNumbers[Math.floor(Math.random() * dishIndexNumbers.length)];
        if (
          dishIndexNumbers[randomDishIndex] !== randomVegetarianDishIndexNumber
        ) {
          this.dishesIndexList.push(randomDishIndex);
          dishIndexNumbers.splice(randomDishIndex, 1);
        } else continue;
      }
      //Replace index for Friday
      this.dishesIndexList.splice(4, 1, randomVegetarianDishIndexNumber);

      this.dataLoaded = true;
      return this.dishesIndexList;
    },

    async getDishIndexList() {
      this.dataLoaded = false;
      await this.getDishes();
      this.pickADishIndexForEachDay();
    },

    async save() {
      await db.collection("dishes").add(this.editedItem);
      console.log(this.dishes);
      this.close();
    },

    close() {
      this.dialogField = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    // async deleteDish(ev) {
    //   await db.collection('dishes').doc(ev).delete()
    //   this.selectedOpen = false,
    //   this.getDishes()
    // },
  },
};
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>