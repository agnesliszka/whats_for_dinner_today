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
        <!-- // get height of each element  -->
        <v-lazy
          v-model="isActive.isActiveMonday"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-timeline-item color="purple lighten-2" fill-dot right>
            <template v-slot:opposite>
              <h1>Monday</h1>
            </template>
            <v-card>
              <v-card-title class="purple lighten-2">
                <v-icon dark size="42" class="mr-4">fas fa-egg</v-icon>
                <h3 class="white--text font-weight-medium flex-nowrap">
                  {{ dishes[dishesIndexList[0]].dish_name }}
                </h3>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="8">
                    <h3>Składniki</h3>
                    <v-divider class="my-2"></v-divider>
                    {{ dishes[dishesIndexList[0]].ingredients }}
                  </v-col>
                  <v-col class="hidden-sm-and-down text-right" md="4">
                    <h3 class="align-right">Przepis</h3>
                    <v-divider class="my-2"></v-divider>
                    <div class="align-right">
                      <v-dialog v-model="dialog.dialog0" width="500">
                        <template v-slot:activator="{ on }">
                          <v-icon v-on="on" size="64">mdi-calendar-text</v-icon>
                        </template>
                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            <span>
                              {{ dishes[dishesIndexList[0]].dish_name }} -
                              przepis
                            </span>
                          </v-card-title>
                          <v-card-text>{{
                            dishes[dishesIndexList[0]].recipe
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
        <v-lazy
          v-model="isActive.isActiveTuesday"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-timeline-item color="amber lighten-1" fill-dot left>
            <template v-slot:opposite>
              <h1>Tuesday</h1>
            </template>
            <v-card>
              <v-card-title class="amber lighten-1 justify-end">
                <h3 class="mr-4 white--text font-weight-medium flex-nowrap">
                  {{ dishes[dishesIndexList[1]].dish_name }}
                </h3>
                <v-icon dark size="42">fas fa-drumstick-bite</v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="8">
                    <h3>Składniki</h3>
                    <v-divider class="my-2"></v-divider>
                    {{ dishes[dishesIndexList[1]].ingredients }}
                  </v-col>
                  <v-col class="hidden-sm-and-down text-right" md="4">
                    <h3 class="align-right">Przepis</h3>
                    <v-divider class="my-2"></v-divider>
                    <div class="align-right">
                      <v-dialog v-model="dialog.dialog1" width="500">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" size="64"
                            >mdi-calendar-text</v-icon
                          >
                        </template>

                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            <span>
                              {{ dishes[dishesIndexList[1]].dish_name }} -
                              przepis
                            </span>
                          </v-card-title>
                          <v-card-text>{{
                            dishes[dishesIndexList[1]].recipe
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
        <v-lazy
          v-model="isActive.isActiveWednesday"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-timeline-item color="cyan lighten-1" fill-dot right>
            <template v-slot:opposite>
              <h1>Wednesday</h1>
            </template>
            <v-card>
              <v-card-title class="cyan lighten-1">
                <v-icon class="mr-4" dark size="42">fas fa-pizza-slice</v-icon>
                <h3 class="white--text font-weight-medium flex-nowrap">
                  {{ dishes[dishesIndexList[2]].dish_name }}
                </h3>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="8">
                    <h3>Składniki</h3>
                    <v-divider class="my-2"></v-divider>
                    {{ dishes[dishesIndexList[2]].ingredients }}
                  </v-col>
                  <v-col class="hidden-sm-and-down text-right" md="4">
                    <h3 class="align-right">Przepis</h3>
                    <v-divider class="my-2"></v-divider>
                    <div class="align-right">
                      <v-dialog v-model="dialog.dialog2" width="500">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" size="64"
                            >mdi-calendar-text</v-icon
                          >
                        </template>

                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            <span>
                              {{ dishes[dishesIndexList[2]].dish_name }} -
                              przepis
                            </span>
                          </v-card-title>
                          <v-card-text>{{
                            dishes[dishesIndexList[2]].recipe
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
        <v-lazy
          v-model="isActive.isActiveThursday"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-timeline-item color="red lighten-1" fill-dot left>
            <template v-slot:opposite>
              <h1>Thursday</h1>
            </template>
            <v-card>
              <v-card-title class="red lighten-1 justify-end">
                <h3 class="mr-4 white--text font-weight-medium flex-nowrap">
                  {{ dishes[dishesIndexList[3]].dish_name }}
                </h3>
                <v-icon dark size="42">fas fa-hamburger</v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="8">
                    <h3>Składniki</h3>
                    <v-divider class="my-2"></v-divider>
                    {{ dishes[dishesIndexList[3]].ingredients }}
                  </v-col>
                  <v-col class="hidden-sm-and-down text-right" md="4">
                    <h3 class="align-right">Przepis</h3>
                    <v-divider class="my-2"></v-divider>
                    <div class="align-right">
                      <v-dialog v-model="dialog.dialog3" width="500">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" size="64"
                            >mdi-calendar-text</v-icon
                          >
                        </template>

                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            <span>
                              {{ dishes[dishesIndexList[3]].dish_name }} -
                              przepis
                            </span>
                          </v-card-title>
                          <v-card-text>{{
                            dishes[dishesIndexList[3]].recipe
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
        <v-lazy
          v-model="isActive.isActiveFriday"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-timeline-item color="green lighten-1" fill-dot right>
            <template v-slot:opposite>
              <h1>Friday</h1>
            </template>
            <v-card>
              <v-card-title class="green lighten-1">
                <v-icon class="mr-4" dark size="42">fas fa-fish</v-icon>
                <h3 class="white--text font-weight-medium flex-nowrap">
                  {{ dishes[dishesIndexList[4]].dish_name }}
                </h3>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="8">
                    <h3>Składniki</h3>
                    <v-divider class="my-2"></v-divider>
                    {{ dishes[dishesIndexList[4]].ingredients }}
                  </v-col>
                  <v-col class="hidden-sm-and-down text-right" md="4">
                    <h3 class="align-right">Przepis</h3>
                    <v-divider class="my-2"></v-divider>
                    <div class="align-right">
                      <v-dialog v-model="dialog.dialog4" width="500">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" size="64"
                            >mdi-calendar-text</v-icon
                          >
                        </template>

                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            <span>
                              {{ dishes[dishesIndexList[4]].dish_name }} -
                              przepis
                            </span>
                          </v-card-title>
                          <v-card-text>{{
                            dishes[dishesIndexList[4]].recipe
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
        <v-lazy
          v-model="isActive.isActiveSaturday"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-timeline-item color="pink lighten-1" fill-dot left>
            <template v-slot:opposite>
              <h1>Saturday</h1>
            </template>
            <v-card>
              <v-card-title class="pink lighten-1 justify-end">
                <h3 class="mr-4 white--text font-weight-medium flex-nowrap">
                  {{ dishes[dishesIndexList[5]].dish_name }}
                </h3>
                <v-icon dark size="42">fas fa-hotdog</v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="8">
                    <h3>Składniki</h3>
                    <v-divider class="my-2"></v-divider>
                    {{ dishes[dishesIndexList[5]].ingredients }}
                  </v-col>
                  <v-col class="hidden-sm-and-down text-right" md="4">
                    <h3 class="align-right">Przepis</h3>
                    <v-divider class="my-2"></v-divider>
                    <div class="align-right">
                      <v-dialog v-model="dialog.dialog5" width="500">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" size="64"
                            >mdi-calendar-text</v-icon
                          >
                        </template>

                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            <span>
                              {{ dishes[dishesIndexList[5]].dish_name }} -
                              przepis
                            </span>
                          </v-card-title>
                          <v-card-text>{{
                            dishes[dishesIndexList[5]].recipe
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
        <v-lazy
          v-model="isActive.isActiveSunday"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-timeline-item color="yellow" fill-dot right>
            <template v-slot:opposite>
              <h1>Sunday</h1>
            </template>
            <v-card>
              <v-card-title class="yellow">
                <v-icon class="mr-4" dark size="42">fas fa-carrot</v-icon>
                <h3 class="white--text font-weight-medium flex-nowrap">
                  {{ dishes[dishesIndexList[6]].dish_name }}
                </h3>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" md="8">
                    <h3>Składniki</h3>
                    <v-divider class="my-2"></v-divider>
                    {{ dishes[dishesIndexList[6]].ingredients }}
                  </v-col>
                  <v-col class="hidden-sm-and-down text-right" md="4">
                    <h3 class="align-right">Przepis</h3>
                    <v-divider class="my-2"></v-divider>
                    <div class="align-right">
                      <v-dialog v-model="dialog.dialog6" width="500">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" size="64"
                            >mdi-calendar-text</v-icon
                          >
                        </template>

                        <v-card>
                          <v-card-title class="headline grey lighten-2">
                            <span>
                              {{ dishes[dishesIndexList[6]].dish_name }} -
                              przepis
                            </span>
                          </v-card-title>
                          <v-card-text>{{
                            dishes[dishesIndexList[6]].recipe
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
    dialog: {
      dialog0: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
    },
    dishesIndexList: [],
    dataLoaded: false,
    isActive: {
      isActiveMonday: false,
      isActiveTuesday: false,
      isActiveWednesday: false,
      isActiveThursday: false,
      isActiveFriday: false,
      isActiveSaturday: false,
      isActiveSunday: false,
    },
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