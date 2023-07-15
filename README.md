# Sorting_Visualizer

A web application showcasing the inner workings of sorting algorithms.

Implemented algorithms:
1) Bubble sort
2) Selection sort
3) Insertion sort
4) Merge sort
5) Quick sort
6) Heap sort

Features:
1) Colored representation of step being executed.
  1.1) Blue:default
  1.2) Yellow: Being compared
  1.3) Red: Identified as in incorrect position and to be moved
  1.4) Green: In correct position
2) 3 Controls for visualizations
  2.1) Speed of visualization (5 speed levels)
  2.2) Data size ()
  2.3) Generation of new data (Randomly generate new data).
4) Time and Space complexity of algorithm being visualized.

The project is a web application that serves as a sorting visualizer. It demonstrates the inner workings of various sorting algorithms using colored representations and provides additional features for customization and understanding.

The implemented sorting algorithms in the application include:

Bubble sort: This algorithm repeatedly compares adjacent elements and swaps them if they are in the wrong order.

Selection sort: It selects the smallest element from the unsorted portion of the array and swaps it with the element in the sorted portion.

Insertion sort: This algorithm builds the final sorted array one item at a time by repeatedly inserting a selected element into the correct position within the sorted portion.

Merge sort: It divides the input array into smaller subarrays, sorts them recursively, and then merges them to obtain a sorted array.

Quick sort: This algorithm selects a pivot element and partitions the array into two subarrays, one with elements smaller than the pivot and the other with elements larger than the pivot. It then recursively applies the same process to the subarrays.

Heap sort: It uses a binary heap data structure to sort the elements. The algorithm builds a max heap and repeatedly extracts the maximum element to form the sorted array.

To visualize the sorting process, different colors are used to represent the state of each element:

Blue: Default color for elements.
Yellow: Indicates elements that are currently being compared.
Red: Highlights elements that have been identified as being in the incorrect position and need to be moved.
Green: Represents elements that have reached their correct position in the sorted array.
The application provides three controls for visualization:

Speed of visualization: Users can choose from five different speed levels to control the animation speed of the sorting process.

Data size: Users can specify the size of the data to be sorted, allowing them to observe how the algorithms perform with different amounts of input.

Generation of new data: Users can generate new data randomly, providing an option to reset the sorting process with a fresh set of elements.

In addition to the visualization, the application also displays the time and space complexity of the algorithm being visualized. This information helps users understand the efficiency and resource requirements of each sorting algorithm.

Overall, this project aims to provide an interactive and educational tool for learning and visualizing sorting algorithms using HTML, CSS, and JavaScript technologies.