import { ScrollView, StyleSheet, Text, View } from "react-native";

const Dashboard = () => {
  return (
    <View style={styles.background}> {/* main container view */}

    <ScrollView
      style = {styles.mainscreen} // background color of the main screen
      contentContainerStyle = {styles.content} // styles the content inside the ScrollView.
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>  {/* parent view Header section */}

        <View style={styles.headerText}>  {/* Text section view */}
          <Text style={styles.title}>
            Morning, Areeba 
            </Text> {/* hardcoded areeba for now */}

          <Text style={styles.subtitle}>
            Here is the campus chaos, neatly sorted.
          </Text>
        </View>

        <View style={styles.avatar}> {/* Avatar section view*/}
          <Text style={styles.avatarText}>
            A
          </Text>
        </View>
      </View> {/* Header section ends */}


      {/* Today's summary */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryGlow}>
          </View>

        <View style={styles.summaryText}>
          <Text style={styles.summaryLabel}>
            TODAY
            </Text>

          <Text style={styles.summaryTitle}>
            2 classes, 3 tasks,{"\n"}1 quiz {/* hardcoded for now */}
          </Text>

          <Text style={styles.summaryBody}>
            Next: Data Structures at 10:30 in Lab 4
          </Text>
        </View>

        <View style={styles.summaryMiniCard}>
          <Text style={styles.summaryMiniText}>
            DSA
            </Text>
          <View style={styles.summaryMiniDivider} />
          <Text style={styles.summaryMiniText}>
            10:30
            </Text>
        </View>
      </View>


      {/* Quick actions */}
      <Text style={styles.sectionTitle}>
        Quick actions
        </Text>

      <View style={styles.quickActions}>
        <View style={[styles.actionCard, styles.taskAction]}>
          <Text style={[styles.actionPlus, styles.taskActionText]}>
            +
            </Text>
          <Text style={[styles.actionLabel, styles.taskActionText]}>
            Task
            </Text>
        </View>

        <View style={[styles.actionCard, styles.classAction]}>
          <Text style={[styles.actionPlus, styles.classActionText]}>
            +
            </Text>
          <Text style={[styles.actionLabel, styles.classActionText]}>
            Class
            </Text>
        </View>

        <View style={[styles.actionCard, styles.gradeAction]}>
          <Text style={[styles.actionPlus, styles.gradeActionText]}>
            +
            </Text>
          <Text style={[styles.actionLabel, styles.gradeActionText]}>
            Grade
            </Text>
        </View>

        <View style={[styles.actionCard, styles.noteAction]}>
          <Text style={[styles.actionPlus, styles.noteActionText]}>
            +
            </Text>
          <Text style={[styles.actionLabel, styles.noteActionText]}>
            Note
            </Text>
        </View>
      </View>


      {/* Next class */}
      <Text style={styles.sectionTitle}>
        Next up
        </Text>

      <View style={styles.nextClassCard}>
        <View style={styles.classIcon}>
          <Text style={styles.classIconText}>
            DS {/* hardcoded for now */}
            </Text>
        </View>

        <View style={styles.classDetails}>
          <Text style={styles.className}>
            Data Structures
            </Text>
          <Text style={styles.classTime}>
            10:30 - 11:45 · Lab 4.   {/* hardcoded for now */}
            </Text>
        </View>

        <View style={styles.timePill}>
          <Text style={styles.timePillText}>
            in 42m
            </Text>
        </View>
      </View>

      {/* Due soon */}
      <Text style={styles.sectionTitle}>
        Due soon
        </Text>

      <View style={styles.dueCard}>
        <View style={styles.dueStripe} />

        <View style={styles.dueDetails}>
          <Text style={styles.courseName}>
            DBMS
            </Text>
          <Text style={styles.taskName}>
            ERD submission
            </Text>
        </View>

        <View style={styles.duePill}>
          <Text style={styles.duePillText}>Today</Text>
        </View>
      </View>
</ScrollView>

  {/* Bottom navigation */}
      <View style  = {styles.bottomNav}>

        <View style = {styles.activeNavItem}>
          <Text style={styles.activeNavIcon}>
            ⌂
            </Text>
          <Text style={styles.activeNavText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>
            ✓
            </Text>
          <Text style={styles.navText}>
            Tasks
            </Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>
            ▦
            </Text>
          <Text style={styles.navText}>Courses</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>
            %
            </Text>
          <Text style={styles.navText}>
            Grades
            </Text>
        </View>
      </View>
       </View>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "#F6F8FB" , paddingBottom: 20},

  mainscreen: {
    flex: 1,
    backgroundColor: "#F6F8FB",
  },

  content: {
    paddingTop: 80,
    paddingHorizontal: 22,
    paddingBottom: 10,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  headerText: {
    flex: 1,
    paddingRight: 12, // Adding padding to the right to create space and breathing room between the text and the avatar
  },

  title: {
    color: "#0F1420",
    fontSize: 29,
    fontWeight: "800",
    letterSpacing: -0.5,
  },

  subtitle: {
    color: "#8189A0",
    fontSize: 13.5,
    marginTop: 5,
    fontStyle: "italic",
    letterSpacing: 0.1,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2663EB",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#2663EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5, // Adding elevation for Android shadow
  },

  avatarText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },

  // Summary card
  summaryCard: {
    minHeight: 170,
    backgroundColor: "#2663EB",
    borderRadius: 30,
    padding: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    overflow: "hidden",
    shadowColor: "#2663EB",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.28,
    shadowRadius: 20,
    elevation: 8,
  },

  summaryGlow: {
    position: "absolute", // This makes the glow effect appear behind the content of the summary card outside the normal flexbox layout
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255,255,255,0.08)",
    top: 50,
    right: -30,
  },

  summaryText: {
    flex: 1,
    paddingRight: 14,
  },

  summaryLabel: {
    color: "#BBD8FF",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 8,
  },

  summaryTitle: {
    color: "white",
    fontSize: 23,
    lineHeight: 28,
    fontWeight: "800",
    letterSpacing: -0.3,
  },

  summaryBody: {
    color: "#D6ECFF",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 6,
  },

  summaryMiniCard: { // by default, colour is transparent
    width: 70,
    height: 100,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.14)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  summaryMiniText: {
    color: "white",
    fontSize: 10.5,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },

  summaryMiniDivider: {
    width: 18,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
  },

  // Sections
  sectionTitle: {
    color: "#0F1420",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: -0.3,
    marginBottom: 12,
  },

  // Quick actions
  quickActions: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 36,
  },

  actionCard: {
    flex: 1,
    height: 78,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",  
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    shadowColor: "#131821",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  actionPlus: {
    fontSize: 20,
    fontWeight: "800",
  },

  actionLabel: {
    fontSize: 11.5,
    fontWeight: "700",
    letterSpacing: 0.1,
  },

  taskAction: { backgroundColor: "#DCEBFF" },
  classAction: { backgroundColor: "#CEF6E9" },
  gradeAction: { backgroundColor: "#E7E1FF" },
  noteAction: { backgroundColor: "#FFEFD1" },

  taskActionText: { color: "#2663EB" },
  classActionText: { color: "#0BA398" },
  gradeActionText: { color: "#7055E0" },
  noteActionText: { color: "#E09115" },

  // Next class
  nextClassCard: {
    minHeight: 96,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 36,
    shadowColor: "#131821",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 3,
  },

  classIcon: {
    width: 56,
    height: 56,
    borderRadius: 17,
    backgroundColor: "#CEF6E9",
    alignItems: "center",
    justifyContent: "center",
  },

  classIconText: {
    color: "#0BA398",
    fontSize: 15,
    fontWeight: "800",
  },

  classDetails: {
    flex: 1,
    paddingLeft: 16,
  },

  className: {
    color: "#0F1420",
    fontSize: 17,
    fontWeight: "800",
    letterSpacing: -0.2,
  },

  classTime: {
    color: "#8189A0",
    fontSize: 13,
    marginTop: 6,
  },

  timePill: {
    backgroundColor: "#CEF6E9",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  timePillText: {
    color: "#1c3533",
    fontSize: 12,
    fontWeight: "700",
  },

  // Due soon
  dueCard: {
    minHeight: 74,
    backgroundColor: "white",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
    overflow: "hidden",
    shadowColor: "#131821",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 3,
  },

  dueStripe: {
    width: 10,
    alignSelf: "stretch",
    backgroundColor: "#F25D4D",
  },

  dueDetails: {
    flex: 1,
    paddingLeft: 16,
  },

  courseName: {
    color: "#F25D4D",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.4,
  },

  taskName: {
    color: "#0F1420",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
  },

  duePill: {
    backgroundColor: "#FFE2D5",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginRight: 18,
  },

  duePillText: {
    color: "#D62F2F",
    fontSize: 13,
    fontWeight: "700",
  },

  // Bottom nav
  bottomNav: {
    minHeight: 62,
    minWidth: "90%",
    maxWidth: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "rgba(5, 24, 36, 0.05)",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#131821",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 6,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },

  activeNavItem: {
    flex: 1,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#DCEBFF",
    alignItems: "center",
    justifyContent: "center",
  },

  navIcon: {
    color: "#9AA2B5",
    fontSize: 14,
    fontWeight: "bold",
  },

  navText: {
    color: "#9AA2B5",
    fontSize: 9,
    fontWeight: "600",
  },

  activeNavIcon: {
    color: "#2663EB",
    fontSize: 14,
    fontWeight: "bold",
  },

  activeNavText: {
    color: "#2663EB",
    fontSize: 9,
    fontWeight: "700",
  },
});

export default Dashboard;