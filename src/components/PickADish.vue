<template>
 
 <div> 
    <div v-if="!dataLoaded">
      <v-container style="height: 400px;">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
          Loading data...
        </v-col>
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

<div v-if="dataLoaded">
<div class="card-body">
  <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
</div>
 <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
      class="mr-7"
    >
    <template v-slot:opposite>
        <h1>Monday</h1>
      </template>
      <v-card>
        <v-card-title class="purple lighten-2">   
           <v-icon
            dark
            size="42"
            class="mr-4"
          >
            fas fa-egg
          </v-icon>  
          <h3 class="white--text font-weight-medium">{{ dishes[dishesIndexList[0]].dish_name}}</h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <h3>Składniki</h3>
              <v-divider class="my-2"></v-divider>
              {{ dishes[dishesIndexList[0]].ingredients}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="4"
            >
            <h3 class="align-right">Przepis</h3>
              <v-divider class="my-2"></v-divider>
            <div class="align-right">
            <v-dialog
              v-model="dialog0"
              width="500"
            >
              <template v-slot:activator="{ on }">
              <v-icon v-on="on" size="64">mdi-calendar-text</v-icon>
              </template>

              <v-card>
                <v-card-title class="headline grey lighten-2 mb-4">
                  <span>{{ dishes[dishesIndexList[0]].dish_name}} - przepis</span>
                </v-card-title>
                <v-card-text>
                  {{ dishes[dishesIndexList[0]].recipe}}
                </v-card-text>
              </v-card> 
            </v-dialog> 
            </div>            
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      class="ml-7"
    >
     <template v-slot:opposite>
        <h1>Tuesday</h1>
      </template>
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h3 class="mr-4 white--text font-weight-medium">{{ dishes[dishesIndexList[1]].dish_name}}</h3>
          <v-icon
            dark
            size="42"
          >fas fa-drumstick-bite</v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <h3>Składniki</h3>
              <v-divider class="my-2"></v-divider>
              {{ dishes[dishesIndexList[1]].ingredients}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="4"
            >
            <h3 class="align-right">Przepis</h3>
              <v-divider class="my-2"></v-divider>
            <div class="align-right">
        <v-dialog
          v-model="dialog1"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2 mb-4">
              <span>{{ dishes[dishesIndexList[1]].dish_name}} - przepis</span>
            </v-card-title>
            <v-card-text>
              {{ dishes[dishesIndexList[1]].recipe}}
            </v-card-text>
          </v-card>
        </v-dialog>
    </div>
            </v-col>
          </v-row>
        </v-container> 
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
      class="mr-7"
    >
     <template v-slot:opposite>
        <h1>Wednesday</h1>
      </template>
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            fas fa-pizza-slice
          </v-icon>
          <h3 class="white--text font-weight-medium">{{ dishes[dishesIndexList[2]].dish_name}}</h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <h3>Składniki</h3>
              <v-divider class="my-2"></v-divider>
              {{ dishes[dishesIndexList[2]].ingredients}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="4"
            >
               <h3 class="align-right">Przepis</h3>
              <v-divider class="my-2"></v-divider>
            <div class="align-right">
        <v-dialog
          v-model="dialog2"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2 mb-4">
              <span>{{ dishes[dishesIndexList[2]].dish_name}} - przepis</span>
            </v-card-title>
            <v-card-text>
              {{ dishes[dishesIndexList[2]].recipe}}
            </v-card-text>
          </v-card>
        </v-dialog>
    </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      class="ml-7"
    >
     <template v-slot:opposite>
        <h1>Thursday</h1>
      </template>
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h3 class="mr-4 white--text font-weight-medium">{{ dishes[dishesIndexList[3]].dish_name}}</h3>
          <v-icon
            dark
            size="42"
          >
            fas fa-hamburger
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <h3>Składniki</h3>
              <v-divider class="my-2"></v-divider>
              {{ dishes[dishesIndexList[3]].ingredients}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="4"
            >
                <h3 class="align-right">Przepis</h3>
              <v-divider class="my-2"></v-divider>
            <div class="align-right">
        <v-dialog
          v-model="dialog3"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2 mb-4">
              <span>{{ dishes[dishesIndexList[3]].dish_name}} - przepis</span>
            </v-card-title>
            <v-card-text>
              {{ dishes[dishesIndexList[3]].recipe}}
            </v-card-text>
          </v-card>
        </v-dialog>
    </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="green lighten-1"
      fill-dot
      right
      class="mr-7"
    >
     <template v-slot:opposite>
        <h1>Friday</h1>
      </template>
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            fas fa-fish
          </v-icon>
          <h3 class="white--text font-weight-medium">{{ dishes[dishesIndexList[4]].dish_name}}</h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <h3>Składniki</h3>
              <v-divider class="my-2"></v-divider>
              {{ dishes[dishesIndexList[4]].ingredients}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="4"
            >
                <h3 class="align-right">Przepis</h3>
              <v-divider class="my-2"></v-divider>
            <div class="align-right">
        <v-dialog
          v-model="dialog4"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2 mb-4">
              <span>{{ dishes[dishesIndexList[4]].dish_name}} - przepis</span>
            </v-card-title>
            <v-card-text>
              {{ dishes[dishesIndexList[4]].recipe}}
            </v-card-text>
          </v-card>
        </v-dialog>
    </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
    
    <v-timeline-item
      color="pink lighten-1"
      fill-dot
      left
      class="ml-7"
    >
     <template v-slot:opposite>
        <h1>Saturday</h1>
      </template>
      <v-card>
        <v-card-title class="pink lighten-1 justify-end">
          <h3 class="mr-4 white--text font-weight-medium">{{ dishes[dishesIndexList[5]].dish_name}}</h3>
          <v-icon
            dark
            size="42"
          >
            fas fa-hotdog
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <h3>Składniki</h3>
              <v-divider class="my-2"></v-divider>
              {{ dishes[dishesIndexList[5]].ingredients}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="4"
            >
               <h3 class="align-right">Przepis</h3>
              <v-divider class="my-2"></v-divider>
            <div class="align-right">
        <v-dialog
          v-model="dialog5"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2 mb-4">
              <span>{{ dishes[dishesIndexList[5]].dish_name}} - przepis</span>
            </v-card-title>
            <v-card-text>
              {{ dishes[dishesIndexList[5]].recipe}}
            </v-card-text>
          </v-card>
        </v-dialog>
    </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
    
        <v-timeline-item
      color="yellow"
      fill-dot
      right
      class="mr-7"
    >
     <template v-slot:opposite>
        <h1>Sunday</h1>
      </template>
      <v-card>
        <v-card-title class="yellow">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            fas fa-carrot
          </v-icon>
          <h3 class="white--text font-weight-medium">{{ dishes[dishesIndexList[6]].dish_name}}</h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <h3>Składniki</h3>
              <v-divider class="my-2"></v-divider>
              {{ dishes[dishesIndexList[6]].ingredients}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="4"
            >
            <h3 class="align-right">Przepis</h3>
              <v-divider class="my-2"></v-divider>
            <div class="align-right">
            <v-dialog
              v-model="dialog6"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
              </template>

              <v-card>
                <v-card-title class="headline grey lighten-2 mb-4">
                  <span>{{ dishes[dishesIndexList[6]].dish_name}} - przepis</span>
                </v-card-title>
                <v-card-text>
                  {{ dishes[dishesIndexList[6]].recipe}}
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>
 </div>
</template>


<script>
import { db } from '@/main'
import { mapState } from 'vuex'
import { mapGetters } from "vuex";

export default {
    data: () => ({
        selectedDish: {},
        dialog0: false,
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        dialog6: false,
        dishesIndexList: [],
        dataLoaded: false,
        // cooked_meat_dish: "fas fa-egg",
        // fried_meat_dish: "fas fa-drumstick-bite",
        // baked_meat_dish: "fas fa-pizza-slice",
        // vegetarian_dish: "fas fa-carrot"
    }),

    mounted() {
      this.getDishIndexList()
    },

    computed: {
        ...mapState([
          'dishes'
        ]),
    ...mapGetters({
      user: "user"
    })
  
    },

    methods: {
        async getDishes() {
          await this.$store.dispatch('setDishes')
        },
        
        editDish(ev) {
            this.currentlyEditing = ev.id
          },

          updateDish(ev) {
            db.collection('dishes').doc(this.currentlyEditing).update({
              details: ev.details
            })
            this.currentlyEditing = null
          },

          async deleteDish(ev) {
            await db.collection('dishes').doc(ev).delete()
            this.selectedOpen = false,
            this.getDishes()
          },

          showDish({ nativeEvent, dish }) {
            const open = () => {
              this.selectedDish = dish
              this.selectedElement = nativeEvent.target
              setTimeout(() => this.selectedOpen = true, 10)
            }
            if (this.selectedOpen) {
              this.selectedOpen = false
              setTimeout(open, 10)
            } else {
              open()
            }
            nativeEvent.stopPropagation()
          },
          
          pickADishIndexForEachDay(){
            const numberOfDishes = this.dishes.length

            const numbersArr = [];

            for ( let i = 0; i < numberOfDishes; i++ ) { 
              numbersArr.push(i);
            }

            while (this.dishesIndexList.length < 7){
              var randomIndex = Math.floor(Math.random() * numbersArr.length);
              this.dishesIndexList.push(numbersArr[randomIndex]);
              numbersArr.splice(randomIndex, 1);
            }

            this.dataLoaded = true;
            return this.dishesIndexList;
            },  

       async getDishIndexList(){

              await this.getDishes()
              this.pickADishIndexForEachDay()
            },
           
      },
}
</script>
<style scoped>
  .v-progress-circular {
    margin: 1rem;
  }
</style>
