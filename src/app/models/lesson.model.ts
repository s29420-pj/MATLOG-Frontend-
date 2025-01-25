export interface Lesson {
  id: string;
  subject?: string; // Opcjonalne pole na temat lekcji
  teacher?: string; // Opcjonalne pole na nazwisko nauczyciela
  startTime: string; // Data i godzina rozpoczęcia lekcji
  endTime: string; // Data i godzina zakończenia lekcji
  price: number; // Cena lekcji
  status: 'booked' | 'available' | 'paid'; // Status lekcji
}
