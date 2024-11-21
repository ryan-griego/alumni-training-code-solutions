const business = {
  opens: '9am',
  closes: '5pm',
  totalEmployees: 4,
  daysOpen: ['M', 'W', 'F'],
  employees: {
    john: {
      position: 'Owner',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    michael: {
      position: 'Clerk',
      daysOfWeekWorking: ['M', 'F'],
    },
    shawn: {
      position: 'Developer',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    bob: {
      position: 'Accountant',
      daysOfWeekWorking: ['F'],
    },
  },
};

function addWeekends(business: any): void {
  Object.values(business.employees).forEach((employee: any) => {
    ['Sat', 'Sun'].forEach((day) => {
      employee.daysOfWeekWorking.push(day);
    });
  });
}

const jobTitles = [
  'Coffee maker',
  'Warehouse worker',
  'Deliver person',
  'Marketing specialist',
];

const weekDayWorkdays = ['M', 'T', 'W', 'Th', 'F'];

async function addEmployees(business: any): Promise<void> {
  business.daysOpen.push('Sat', 'Sun');

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    for (let i = 0; i < 4; i++) {
      const newEmployee = data[i];
      const generateNumberOfDaysToWork = Math.floor(
        Math.random() * weekDayWorkdays.length + 1
      );
      const daysToWork: number[] = [];

      if (newEmployee) {
        business.totalEmployees++;

        for (let i = 0; i < generateNumberOfDaysToWork; i++) {
          const generateDaysToWork = Math.floor(
            Math.random() * weekDayWorkdays.length + 1
          );

          if (!daysToWork.includes(generateDaysToWork - 1)) {
            daysToWork.push(generateDaysToWork - 1);
          } else {
            i--;
          }

          daysToWork.sort();
        }

        const workDays = daysToWork.map((index) => weekDayWorkdays[index]);
        workDays.push('Sat', 'Sun');

        const firstName = newEmployee.name.split(' ')[0].toLowerCase();

        let isFullTime: boolean;
        if (workDays.length > 5) {
          isFullTime = true;
        } else {
          isFullTime = false;
        }

        business.employees[firstName] = {
          position: jobTitles[i],
          daysOfWeekWorking: workDays,
          fullTime: isFullTime,
        };
      }
    }
  } catch {
    console.error('Failed to fetch users:', Error);
    throw Error;
  }
}

function deleteEmployee(employeeName: keyof typeof business.employees): any {
  delete business.employees[employeeName];
  business.totalEmployees--;
}

document.addEventListener('DOMContentLoaded', async () => {
  addWeekends(business);

  Object.values(business.employees).forEach((employee: any) => {
    employee.fullTime = employee.daysOfWeekWorking.length > 5;
  });

  await addEmployees(business);

  deleteEmployee('john');

  console.log('Updated business:', business);
});
