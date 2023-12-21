class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Float
     */
    function findMedianSortedArrays($nums1, $nums2) {
    $mergedArray = array_merge($nums1, $nums2);
    $sortedArray = $mergedArray;
   sort($sortedArray);
   $sum = array_sum($sortedArray);
    $count = count($sortedArray);
    return $result = ($count > 0) ? ($sum / $count) : 'مفيش قسمه ع صفر يا عرص';
    }
}
