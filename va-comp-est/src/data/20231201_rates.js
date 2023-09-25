+// 2023-12-01 rates object

const rates_2018_12_01 = {
  // no deps allowed for 10% and 20%
  "10%" : 165.92,
  "20%" : 327.99,
  // 30% rates
  "30%" : {
    "single" : 508.05,
    "spouse_only": 568.05,
    "spouse_one_parent": 616.05,
    "spouse_two_parent": 664.05,
    "one_parent" : 556.05,
    "two_parents" : 604.05,
    "spouse_aa_allowance" : 56.00,
    "spouse_one_child" : 612.05,
    "child_only" : 548.05,
    "spouse_one_parent_child" : 660.05,
    "spouse_two_parents_child" : 708.05,
    "one_parent_child" : 596.05,
    "two_parents_child" : 644.05,
    "additional_minor_child" : 30.00,
    "additional_school_child" : 97.00
  },
  // 40% rates
  "40%" : {
    "single" : 731.86,
    "spouse_only": 811.86,
    "spouse_one_parent": 875.86,
    "spouse_two_parent": 939.86,
    "one_parent" : 795.86,
    "two_parents" : 859.86,
    "spouse_aa_allowance" : 74.00,
    "spouse_one_child" : 870.86,
    "child_only" : 785.86,
    "spouse_one_parent_child" : 934.86,
    "spouse_two_parents_child" : 998.86,
    "one_parent_child" : 849.86,
    "two_parents_child" : 913.86,
    "additional_minor_child" : 40.00,
    "additional_school_child" : 129.00
  },
  // 50% rates
  "50%" : {
    "single" : 1,041.82,
    "spouse_only": 1,141.82,
    "spouse_one_parent": 1,222.82,
    "spouse_two_parent": 1,303.82,
    "one_parent" : 1,122.82,
    "two_parents" : 1,203.82,
    "spouse_aa_allowance" : 93.00,
    "spouse_one_child" : 1,215.82,
    "child_only" : 1,108.82,
    "spouse_one_parent_child" : 1,296.82,
    "spouse_two_parents_child" : 1,377.82,
    "one_parent_child" : 1,189.82,
    "two_parents_child" : 1,270.82,
    "additional_minor_child" : 50.00,
    "additional_school_child" : 162.00
  },
  // 60% rates
  "60%" : {
    "single" : 1,319.65,
    "spouse_only": 1,440.65,
    "spouse_one_parent": 1,537.65,
    "spouse_two_parent": 1,634.65,
    "one_parent" : 1,416.65,
    "two_parents" : 1,513.65,
    "spouse_aa_allowance" : 111.00,
    "spouse_one_child" : 1,528.65,
    "child_only" : 1,400.65,
    "spouse_one_parent_child" : 1,625.65,
    "spouse_two_parents_child" : 1,722.65,
    "one_parent_child" : 1,497.65,
    "two_parents_child" : 1,594.65,
    "additional_minor_child" : 60.00,
    "additional_school_child" : 194.00
  },
  // 70% rates
  "70%" : {
    "single" : 1,663.06,
    "spouse_only": 1,804.06,
    "spouse_one_parent": 1,917.06,
    "spouse_two_parent": 2,030.06,
    "one_parent" : 1,776.06,
    "two_parents" : 1,889.06,
    "spouse_aa_allowance" : 130.00,
    "spouse_one_child" : 1,907.06,
    "child_only" : 1,757.06,
    "spouse_one_parent_child" : 2,020.06,
    "spouse_two_parents_child" : 2,133.06,
    "one_parent_child" : 1,870.06,
    "two_parents_child" : 1,983.06,
    "additional_minor_child" : 70.00,
    "additional_school_child" : 226.00
  },
  // 80% rates
  "80%" : {
    "single" : 1,933.15,
    "spouse_only": 2,094.15,
    "spouse_one_parent": 2,223.15,
    "spouse_two_parent": 2,353.15,
    "one_parent" : 2,062.15,
    "two_parents" : 2,191.15,
    "spouse_aa_allowance" : 148.00,
    "spouse_one_child" : 2,212.15,
    "child_only" : 2,041.15,
    "spouse_one_parent_child" : 2,341.15,
    "spouse_two_parents_child" : 2,470.15,
    "one_parent_child" : 2,170.15,
    "two_parents_child" : 2,299.15,
    "additional_minor_child" : 80.00,
    "additional_school_child" : 259.00
  },
  // 90% rates
  "90%" : {
    "single" : 2,172.39,
    "spouse_only": 2,353.39,
    "spouse_one_parent": 2,498.39,
    "spouse_two_parent": 2,643.39,
    "one_parent" : 2,317.39,
    "two_parents" : 2,462.39,
    "spouse_aa_allowance" : 167.00,
    "spouse_one_child" : 2,486.39,
    "child_only" : 2,293.39,
    "spouse_one_parent_child" : 2,631.39,
    "spouse_two_parents_child" : 2,776.39,
    "one_parent_child" : 2,438.39,
    "two_parents_child" : 2,583.39,
    "additional_minor_child" : 90.00,
    "additional_school_child" : 291.00
  },
  // 100% rates
  "100%" : {
    "single" : 3,621.95,
    "spouse_only": 3,823.89,
    "spouse_one_parent": 3,985.96,
    "spouse_two_parent": 4,148.03,
    "one_parent" : 3,784.02,
    "two_parents" : 3,946.09,
    "spouse_aa_allowance" : 185.21,
    "spouse_one_child" : 3,971.78,
    "child_only" : 3,757.00,
    "spouse_one_parent_child" : 4,133.85,
    "spouse_two_parents_child" : 4,295.92,
    "one_parent_child" : 3,919.07,
    "two_parents_child" : 4,081.14,
    "additional_minor_child" : 100.34,
    "additional_school_child" : 324.12
  } 
}