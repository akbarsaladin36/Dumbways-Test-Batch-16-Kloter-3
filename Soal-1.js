function count_handshake(person) {
    var counter = 0;
    for (i = person-1; i > 0; i--) {
        counter += i;
    }
    return counter;
}
    