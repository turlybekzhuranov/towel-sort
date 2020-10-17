
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
      if ( !Array.isArray(matrix) || (matrix.length == 0) ) return ([]);
    let sortedMatrix = []; //itr = 1;

        matrix.forEach((subMatrix, index) => { 
          if (index % 2 !== 0) { sortedMatrix = sortedMatrix.concat( subMatrix.reverse() ); }
          else { sortedMatrix = sortedMatrix.concat(subMatrix); }
          //itr += 1;
        });

      return sortedMatrix;
}
