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
          <h2 class="display-1 white--text font-weight-light">Title 1</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="10">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
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
          <h2 class="display-1 mr-4 white--text font-weight-light">Title 2</h2>
          <v-icon
            dark
            size="42"
          >mdi-home-outline</v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
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
          <h2 class="display-1 white--text font-weight-light">Title 3</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              v-for="n in 3"
              :key="n"
              cols="12"
              md="4"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
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
          <h2 class="display-1 mr-4 white--text font-weight-light">Title 4</h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col class="hidden-sm-and-down" md="2">
              <v-icon size="64">mdi-server-network</v-icon>
            </v-col>
            <v-col cols="12" md="10">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
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
          <h2 class="display-1 white--text font-weight-light">Title 5</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
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
          <h2 class="display-1 mr-4 white--text font-weight-light">Title 4</h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col class="hidden-sm-and-down" md="2">
              <v-icon size="64">mdi-server-network</v-icon>
            </v-col>
            <v-col cols="12" md="10">
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
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
          <h2 class="display-1 white--text font-weight-light">Title 5</h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
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
    }),

    mounted() {
      this.getDishes()
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
