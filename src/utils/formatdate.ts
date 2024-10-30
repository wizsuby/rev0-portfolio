export function formatDateFromISO(isoDate: string): string {
    const date = new Date(isoDate); // Parse ISO string to Date object
    const today = new Date(); // Get current date

    // List of month names
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // Extract year, month, and day
    const year = date.getFullYear();
    const month = months[date.getMonth()]; // Get month name
    const day = date.getDate();

    // Calculate difference in years
    const yearDiff = today.getFullYear() - year;
    const monthDiff = today.getMonth() - date.getMonth();
    const dayDiff = today.getDate() - day;

    // Adjust year difference if the month/day of the current date is before the input date
    let yearsAgo = yearDiff;
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        yearsAgo--;
    }

    // Format the final date
    const formattedDate = `${month} ${day}, ${year} (${yearsAgo}y ago)`;

    return formattedDate;
}

export function getYearFromISO(isoDate: string): number {
    const date = new Date(isoDate); // Parse ISO string to Date object
    return date.getFullYear(); // Extract and return the year
}