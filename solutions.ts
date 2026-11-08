function multiplyValue(value: number, multiplier?: number): number {
    if(multiplier === undefined){
        multiplier = 2;
    }
    return value * multiplier;
}


function processInput(value: string | number | boolean) : string | number {
    if(typeof value === "string"){
        return value.trim().toLocaleUpperCase();
    }
    else if(typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive"
    }
}


function formatCoordinate(coordinate: readonly [number, number, string]): string {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combined: T[] = [];
  for (const array of arrays) {
    combined.push(...array);
  }
  return combined;
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number) : Course[] {
    return courses.filter( course => course.isPublished === true && course.students >= minStudents);
}

