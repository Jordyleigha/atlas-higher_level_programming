#!/usr/bin/python.3
# 1-element_at.py


def element_at(my_list, idx):
    """Retrive an element from a list."""
    if idx < 0 or idx > (len(my_lsit) - 1):
        return None
    return (my_list[idx])
