<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
      class="mr-7"
    >
    <template v-slot:opposite>
        <span>Monday</span>
      </template>
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-magnify
          </v-icon>
          <h3 class="white--text font-weight-light">{{ dishes[0].dish_name}}</h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              {{ dishes[0].recipe}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
            <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Ingredients
            </v-card-title>
            <v-card-text>
              {{ dishes[0].ingredients}}
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
        <span>Tuesday</span>
      </template>
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h3 class="mr-4 white--text font-weight-light">{{ dishes[1].dish_name}}</h3>
          <v-icon
            dark
            size="42"
          >mdi-home-outline</v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              {{ dishes[1].recipe}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
                <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Ingredients
            </v-card-title>
            <v-card-text>
              {{ dishes[1].ingredients}}
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
        <span>Wednesday</span>
      </template>
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon>
          <h3 class="white--text font-weight-light">{{ dishes[2].dish_name}}</h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              {{ dishes[2].recipe}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
                <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Ingredients
            </v-card-title>
            <v-card-text>
              {{ dishes[3].ingredients}}
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
        <span>Thursday</span>
      </template>
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h3 class="mr-4 white--text font-weight-light">{{ dishes[3].dish_name}}</h3>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              {{ dishes[3].recipe}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
                <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Ingredients
            </v-card-title>
            <v-card-text>
              {{ dishes[4].ingredients}}
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
        <span>Friday</span>
      </template>
      <v-card>
        <v-card-title class="green lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-phone-in-talk
          </v-icon>
          <h3 class="white--text font-weight-light">{{ dishes[4].dish_name}}</h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              {{ dishes[4].recipe}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
                <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Ingredients
            </v-card-title>
            <v-card-text>
              {{ dishes[5].ingredients}}
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
        <span>Saturday</span>
      </template>
      <v-card>
        <v-card-title class="pink lighten-1 justify-end">
          <h3 class="mr-4 white--text font-weight-light">{{ dishes[5].dish_name}}</h3>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              {{ dishes[5].recipe}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
                <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" size="64">mdi-calendar-text</v-icon>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Ingredients
            </v-card-title>
            <v-card-text>
              {{ dishes[6].ingredients}}
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
        <span>Sunday</span>
      </template>
      <v-card>
        <v-card-title class="yellow">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-phone-in-talk
          </v-icon>
          <h3 class="white--text font-weight-light">{{ dishes[6].dish_name}}</h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              {{ dishes[6].recipe}}
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">mdi-calendar-text</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  
</template>


<script>
import { db } from '@/main'
import { mapState } from 'vuex'

export default {
    data: () => ({
        selectedDish: {},
        dialog: false,
    }),

    mounted() {
      this.getDishes()
      console.log(this.dishes)
    },

    computed: {
        ...mapState([
          'dishes'
        ]),
    },

    methods: {
        getDishes() {
          this.$store.dispatch('setDishes')
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
    }
}
    

</script>
