#include < stdio.h >

    void scan(int data[], int N) {
    for (int i = 0; i < N; i++) {
        scanf("%d", & data[i]);
    }
}

void print(int data[], int N) {
    for (int i = 0; i < N; i++) {
        printf("%d ", data[i]);
    }
}

void Qsort(int data[], int low, int high) {
    int L = low + 1;
    int H = high;

    while (L <= H) {
        print(data, high + 1);
        printf(" L = %d, H = %d ", L, H);

        while (data[L] < data[low]) {
            L++;
            printf("L%d ", L);
        }
        while (data[H] > data[low]) {
            H--;
            printf("H%d ", H);
        }
        if (L < H) {
            data[L] += data[H];
            data[H] = data[L] - data[H];
            data[L] -= data[H];
            L++;
            H--;
        }
        else {
            data[low] += data[H];
            data[H] = data[low] - data[H];
            data[low] -= data[H];
        }

        print(data, high + 1);
        printf(" L = %d, H = %d \n", L, H);
    }

    if (low < H) {
        Qsort(data, low, H - 1);
    }
    if (L < high) {
        Qsort(data, L, high);
    }
}

int main() {
    int N;
    scanf("%d", & N);

    int data[N];
    scan(data, N);

    Qsort(data, 0, N - 1);

    print(data, N);
}


#include < stdio.h >

    void scan(int data[], int N) {
    for (int i = 0; i < N; i++) {
        scanf("%d", & data[i]);
    }
}

void print(int data[], int N) {
    for (int i = 0; i < N; i++) {
        printf("%d ", data[i]);
    }
}
// low는 움직이지 않음
void Qsort(int data[], int low, int high) {
  int L = low + 1;
  int H = high;

    while (L <= H) {
        print(data, high + 1);
        printf(" L = %d, H = %d ", L, H);

        while (data[L] < data[low]) {
            L++;
            printf("L%d ", L);
        }
        while (data[H] > data[low]) {
            H--;
            printf("H%d ", H);
        }
        if (L < H) {
            data[L] += data[H];
            data[H] = data[L] - data[H];
            data[L] -= data[H];
            L++;
            H--;
        }

        //같은 위치에 왔거나 교차해서 위치가 바뀔 경우
        else {
      int tmp = data[low];
            data[low] = data[H];
            data[H] = tmp;
        }

        print(data, high + 1);
        printf(" L = %d, H = %d \n", L, H);
    }

    if (low < H) {
        Qsort(data, low, H - 1);
    }
    if (L < high) {
        Qsort(data, L, high);
    } //피봇 다시 설정
}

int main() {
  int N;
    scanf("%d", & N);

  int data[N];
    scan(data, N);

    Qsort(data, 0, N - 1);

    print(data, N);
}